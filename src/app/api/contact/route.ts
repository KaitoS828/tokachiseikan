import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, tel, message } = await request.json()

    console.log('Sending email to:', process.env.CONTACT_EMAIL)
    console.log('API Key exists:', !!process.env.RESEND_API_KEY)

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'your-email@example.com',
      replyTo: email,
      subject: `【十勝製函】お問い合わせ: ${name}様より`,
      html: `
        <h2>お問い合わせ内容</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>電話番号:</strong> ${tel || '未記入'}</p>
        <h3>お問い合わせ内容:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    console.log('Email sent successfully:', data)
    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error('Email sending error:', error)
    console.error('Error details:', error.message, error.statusCode)
    return NextResponse.json(
      { success: false, error: error.message || 'メール送信に失敗しました' },
      { status: 500 }
    )
  }
}
