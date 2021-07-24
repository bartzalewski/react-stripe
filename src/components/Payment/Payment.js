import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import Button from '../Button/Button'

const Payment = ({
  name,
  email,
  setPaymentErrorMsg,
  setPaymentSuccessData,
}) => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) return

    const cardElement = elements.getElement(CardElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name,
        email,
      },
    })

    if (error) {
      setPaymentErrorMsg(error.message)
      setPaymentSuccessData({ id: '', name: '', email: '' })
    } else {
      setPaymentErrorMsg('')
      setPaymentSuccessData({
        id: paymentMethod.id,
        name: paymentMethod.billing_details.name,
        email: paymentMethod.billing_details.email,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button msg={'PAY'} disabled={!stripe} />
    </form>
  )
}

export default Payment
