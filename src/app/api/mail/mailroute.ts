import nodemailer, { Transporter } from "nodemailer";
import { NextResponse } from "next/server";

type emailbody = {
    name: string;
    email: string;
    subject: string;
    message: string;
    attachment?: FileList | null;
};

export async function POST(req:Request){
    let body: emailbody;
    try{
        body = await req.json();
    }catch{
        return new Response("Invalid JSON",
            {status: 400}
        );
    }
    // since we got the body now i want to destructure the body into name email subject and attachment
    const {name, email, subject, message} = body;

     if (!name || !email || !message) return new Response("Missing required fields",{status:400});

    //creating a transporter f
    const transporter: Transporter = nodemailer.createTransport({
         service: "gmail",
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    //creating the  mail content - building the html which will be send to me
   const mailContent = {
    from: `${name} <${email}>`,
    to : process.env.EMAIL_TO!,
    subject : subject || "No Subject",
    text: `${message}`,
    html:  `<p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
    // attachment: [

    // ]
   }

   //sending the mail using the transporter and mailContent
  

   try {
    await transporter.sendMail(mailContent);
    return NextResponse.json({message: "Email sent"},{status:200});
   }catch(err){
     console.error("Error sending email:", err);
    return NextResponse.json({message: "Error sending email", error: err},{status: 500});
   }

}
