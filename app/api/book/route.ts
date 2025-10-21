import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail';

export async function POST(req: NextRequest) {
  const data = await req.json().catch(() => null);
  if (!data || !data.name || !data.email) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  const {
    name,
    company,
    email,
    phone,
    business,
    date,
    time,
    meeting,
    about,
    message,
    logo,
    bilder
  } = data;
  const msg = {
    to: process.env.BOOKING_RECEIVER_EMAIL!,
    from: process.env.BOOKING_SENDER_EMAIL!,
    subject: `Ny booking fra ${name}`,
    text:
      `Navn: ${name}\n` +
      `Bedrift: ${company || ''}\n` +
      `E-post: ${email}\n` +
      `Telefon: ${phone || ''}\n` +
      `Bransje: ${business || ''}\n` +
      `Dato: ${date || ''}\n` +
      `Tid: ${time || ''}\n` +
      `Møtetype: ${meeting || ''}\n` +
      `Om bedriften: ${about || ''}\n` +
      `Melding: ${message || ''}\n` +
      `Logo klart: ${logo ? 'Ja' : 'Nei'}\n` +
      `Bilder klart: ${bilder ? 'Ja' : 'Nei'}`,
    html:
      `<strong>Navn:</strong> ${name}<br/>` +
      `<strong>Bedrift:</strong> ${company || ''}<br/>` +
      `<strong>E-post:</strong> ${email}<br/>` +
      `<strong>Telefon:</strong> ${phone || ''}<br/>` +
      `<strong>Bransje:</strong> ${business || ''}<br/>` +
      `<strong>Dato:</strong> ${date || ''}<br/>` +
      `<strong>Tid:</strong> ${time || ''}<br/>` +
      `<strong>Møtetype:</strong> ${meeting || ''}<br/>` +
      `<strong>Om bedriften:</strong> ${about || ''}<br/>` +
      `<strong>Melding:</strong> ${message || ''}<br/>` +
      `<strong>Logo klart:</strong> ${logo ? 'Ja' : 'Nei'}<br/>` +
      `<strong>Bilder klart:</strong> ${bilder ? 'Ja' : 'Nei'}`,
  };
  try {
    const response = await sgMail.send(msg);
    console.log('SendGrid response:', response);
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    if (error.response) {
      console.error('SendGrid error response:', error.response.body);
    }
    console.error('SendGrid error:', error);
    return NextResponse.json({ error: 'Email sending failed.', details: error.message, sendgrid: error.response?.body }, { status: 500 });
  }
}
