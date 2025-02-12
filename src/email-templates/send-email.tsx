import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

// import logoDark from '@/../../public/icon-dark.png'

interface SendEmailProps {
  name: string
  business: string
  phone: string
  email: string
  message: string
}

export const SendEmail = ({
  business,
  email,
  message,
  name,
  phone,
}: SendEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Text style={title}>Mensagem enviado(a) por: {name}</Text>
          <Hr style={hr} />
          <Text style={subTitle}>Contatos do cliente</Text>
          <Text style={paragraph}>Email: {email}</Text>
          <Text style={paragraph}>WhatsApp: {phone}</Text>
          <Text style={paragraph}>Empresa: {business}</Text>

          <Hr style={hr} />
          <Text style={paragraph}>
            <Text style={subTitle}>Mensagem:</Text> {message}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default SendEmail

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const box = {
  padding: '0 48px',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
}
const title = {
  color: '#09090b',
  fontSize: '18px',
  lineHeight: '16px',
  textAlign: 'center' as const,
}

const subTitle = {
  color: '#09090b',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
}

const paragraph = {
  color: '#525f7f',

  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
}
