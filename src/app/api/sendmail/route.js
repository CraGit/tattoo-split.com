import { NextResponse } from "next/server";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate required fields
    const requiredFields = ["name", "email", "phone", "message"];
    const missingFields = requiredFields.filter(
      (field) => !body[field]?.trim()
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          status: "error",
          message: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid email format",
        },
        { status: 400 }
      );
    }

    const message = `
Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}        
Message: ${body.message}`;

    const data = {
      to: "tattoo.greenink@gmail.com",
      from: "greeninksplit@gmail.com",
      replyTo: body.email,
      subject: "Tattoo-Split.com - Upit s web stranice",
      text: message,
      html: message.replace(/\n/g, "<br>"),
    };

    await mail.send(data);

    return NextResponse.json(
      {
        status: "success",
        message: "Your message was sent. We'll be in contact shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Don't expose internal error details to the client
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
