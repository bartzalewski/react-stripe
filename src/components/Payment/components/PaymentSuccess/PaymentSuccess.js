import PropTypes from 'prop-types'

import { Container, Message, Bold } from './PaymentSuccess.style'

export default function PaymentSuccess({ id, name, email }) {
  return (
    <Container>
      <Message>Payment successful!</Message>
      <Message>
        ID: <Bold>{id}</Bold>
      </Message>
      <Message>
        Full name: <Bold>{name}</Bold>
      </Message>
      <Message>
        Email: <Bold>{email}</Bold>
      </Message>
    </Container>
  )
}

PaymentSuccess.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
}
