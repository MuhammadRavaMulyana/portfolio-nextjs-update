import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log("API Key exists:", !!process.env.RESEND_API_KEY);
  console.log(
    "API Key prefix:",
    process.env.RESEND_API_KEY?.substring(0, 6)
  );
}
  try {
    const { name, email, message } = await req.json();

    // ...
  try {
    const { name, email, message } = await req.json();

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["ravam7209@gmail.com"],
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr />

        <p>${message}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}