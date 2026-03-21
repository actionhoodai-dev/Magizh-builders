import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, phone, message, service } = await request.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'magizhbuilderssalem@gmail.com', // Recipient Address
      subject: `New Enquiry from ${name} - Magizh Builders`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; max-width: 600px; border: 1px solid #EDEDED;">
          <h2 style="color: #1B6644;">New Website Enquiry</h2>
          <p>You have received a new project enquiry:</p>
          <hr style="border: none; border-top: 1px solid #EDEDED;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${service ? `<p><strong>Service Requested:</strong> ${service}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #F9F9F9; padding: 15px; border-radius: 4px;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Resend error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
