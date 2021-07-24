import PropTypes from 'prop-types'

import { Container, Message, Bold } from './PaymentError.style'

export default function PaymentError({ msg }) {
  return (
    <Container>
      <Message>Payment unsuccessful!</Message>
      <Message>
        Error: <Bold>{msg}</Bold>
      </Message>
    </Container>
  )
}

PaymentError.propTypes = {
  msg: PropTypes.string,
}
