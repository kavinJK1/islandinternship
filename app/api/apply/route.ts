import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, university, studyYear, destination, internshipField, message } = body;

  if (!firstName || !lastName || !email || !university || !studyYear || !destination || !internshipField) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Island Internship <onboarding@resend.dev>",
    to: "hello@islandinternship.com",
    replyTo: email,
    subject: `New application — ${firstName} ${lastName} (${destination})`,
    text: [
      `New internship application received.`,
      ``,
      `Name:        ${firstName} ${lastName}`,
      `Email:       ${email}`,
      `University:  ${university}`,
      `Study year:  ${studyYear}`,
      `Destination: ${destination}`,
      `Field:       ${internshipField}`,
      `Message:     ${message || "—"}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
