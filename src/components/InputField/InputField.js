import { Container, Label, Input } from './InputField.style'

export default function InputField({ label, setter, isEmail }) {
  const isEmailField = isEmail ? 'email' : 'text'

  return (
    <Container>
      <Label>{label}</Label>
      <Input type={isEmailField} onChange={(e) => setter(e.target.value)} />
    </Container>
  )
}
