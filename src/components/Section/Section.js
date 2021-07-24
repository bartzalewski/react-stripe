import React from 'react'
import stripeLogo from '../../images/stripe-logo.png'

import { Container, Image, Top, Bottom } from './Section.style'

export default function Section({ children }) {
  return (
    <Container>
      <Top>
        <Image src={stripeLogo} alt="Stripe logo" />
      </Top>
      <Bottom>{children}</Bottom>
    </Container>
  )
}
