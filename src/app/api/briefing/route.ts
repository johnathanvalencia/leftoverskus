import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, company, role, volume } = body;

    const roleLabels: Record<string, string> = {
      agency: "Agency / Holding Company",
      brand: "Brand / Retailer",
      other: "Other",
    };

    const result = await resend.emails.send({
      from: "PathLLM.ai <onboarding@resend.dev>",
      to: "jv1011@gmail.com",
      subject: "PathLLM New Briefing Request",
      replyTo: email,
      html: `
        <h2>New Briefing Request</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Name</td><td style="padding:8px 0;"><strong>${name}</strong></td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Company</td><td style="padding:8px 0;"><strong>${company}</strong></td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Type</td><td style="padding:8px 0;">${roleLabels[role] || role}</td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Monthly Volume</td><td style="padding:8px 0;">${volume} videos</td></tr>
        </table>
      `,
    });

    console.log("Resend response:", JSON.stringify(result));

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: result.data?.id });
  } catch (error) {
    console.error("Briefing email failed:", error);
    return NextResponse.json(
      { error: "Failed to send briefing request" },
      { status: 500 }
    );
  }
}
