import { Resend } from 'resend'

import { NextRequest, NextResponse } from 'next/server'
import SendEmail from '@/email-templates/send-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, phone, message, business } = await req.json()

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 },
    )
  }

  try {
    const data = await resend.emails.send({
      from: `${name} <${process.env.EMAIL_FROM_EMAIL}>`,
      to: [`${process.env.EMAIL_TO_EMAIL}`],
      subject: `TOOP: Email enviado por ${name}`,
      react: SendEmail({
        name: `${name}`,
        email: `${email}`,
        phone: `${phone}`,
        message: `${message}`,
        business: `${business}`,
      }),
    })

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 4000 })
  }
}
