import { createTransport } from 'nodemailer';

const sendEmail = async (to, subject, text)=>{
    const transport = createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user:process.env.MAIL_USER,
          pass:process.env.MAIL_PASS,
        }
    });
    await transport.sendMail({
        to, subject, text,
    })
}

export default sendEmail;