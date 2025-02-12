import { Body, Container, Head, Hr, Html, Text } from '@react-email/components'
import * as React from 'react'

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
        <Text
          style={{
            color: '#09090b',
            fontSize: '24px',
            lineHeight: '36px',
            fontWeight: '700',
            marginBottom: '35px',
          }}
        >
          Toop
        </Text>

        <Text style={title}>Enviado por: {name}</Text>

        <Hr style={hr} />

        <Text style={subTitle}>Contatos do cliente</Text>
        <Text style={paragraph}>Nome: {name}</Text>
        <Text style={paragraph}>Email: {email}</Text>
        <Text style={paragraph}>WhatsApp: {phone}</Text>
        <Text style={paragraph}>Empresa: {business}</Text>

        <Hr style={hr} />
        <Text style={subTitle}>Mensagem:</Text>
        <Text style={paragraph}>{message}</Text>
      </Container>
    </Body>
  </Html>
)

export default SendEmail

const main = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  margin: '0 auto',
  fontFamily: 'sans-serif',
  fontSize: '16px',
  width: '100%',
  maxWidth: '640px',
  padding: '64px 0',
  marginBottom: '64px',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
}
const title = {
  color: '#09090b',
  fontSize: '24px',
  lineHeight: '36px',
  fontWeight: '700',
  marginBottom: '20px',
  textAlign: 'left' as const,
}

const subTitle = {
  color: '#09090b',
  fontSize: '20px',
  lineHeight: '30px',
  fontWeight: '600',
  marginBottom: '15px',
  textAlign: 'left' as const,
}

const paragraph = {
  color: '#18181b',

  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
}
