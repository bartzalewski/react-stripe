import { useState } from 'react'

import Card from '../Card/Card'
import InputField from '../InputField/InputField'
import PaymentError from '../Payment/components/PaymentError/PaymentError'
import PaymentSuccess from '../Payment/components/PaymentSuccess/PaymentSuccess'
import Payment from '../Payment/Payment'
import Section from '../Section/Section'

import { Container } from './Root.style'

export default function Root() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  const [paymentErrorMsg, setPaymentErrorMsg] = useState('')
  const [paymentSuccessData, setPaymentSuccessData] = useState({
    id: '',
    name: '',
    email: '',
  })

  return (
    <Container>
      <Card>
        <Section>
          <InputField label="Full name" setter={setFullName} />
          <InputField label="Email" setter={setEmail} isEmail />
          <Payment
            name={fullName}
            email={email}
            setPaymentErrorMsg={setPaymentErrorMsg}
            setPaymentSuccessData={setPaymentSuccessData}
          />
        </Section>
        {paymentSuccessData.id && (
          <PaymentSuccess
            id={paymentSuccessData.id}
            name={paymentSuccessData.name}
            email={paymentSuccessData.email}
          />
        )}
        {paymentErrorMsg && <PaymentError msg={paymentErrorMsg} />}
      </Card>
    </Container>
  )
}
