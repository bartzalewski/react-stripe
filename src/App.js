import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import Root from './components/Root/Root'
import GlobalStyle from './helpers/globalStyle'

const stripePromise = loadStripe(
  'pk_test_51AROWSJX9HHJ5bycpEUP9dK39tXufyuWogSUdeweyZEXy3LC7M8yc5d9NlQ96fRCVL0BlAu7Nqt4V7N5xZjJnrkp005fDiTMIr'
)

export default function App() {
  return (
    <Elements stripe={stripePromise}>
      <GlobalStyle />
      <Root />
    </Elements>
  )
}
