import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const TO = "Ryan@thewarrioroutreachproject.org";
const FROM = "noreply@thewarrioroutreachproject.org";

export async function sendEmail(subject: string, body: string) {
  if (!process.env.AWS_ACCESS_KEY_ID) return; // skip if not configured
  await ses.send(new SendEmailCommand({
    Source: FROM,
    Destination: { ToAddresses: [TO] },
    Message: {
      Subject: { Data: subject },
      Body: { Text: { Data: body } },
    },
  }));
}
