import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    if (!resend) return NextResponse.json({ error: "Resend API Key Not Found" });
    const { name, email, message } = await request.json();
    try {
        const {data,error} = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'newasram86@gmail.com',
            subject: `Email From www.rahul.eu.org by ${name}`,
            react: EmailTemplate({ name: name, email: email, message: message }),
        });

        if(!data){
            return Response.json({ error }, { status: 500 });
        }
        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
