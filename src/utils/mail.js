import Mailgen from "mailgen";
import nodemailer from "nodemailer";

// this is used to send the mail
const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://taskmanagerlink.com",
    },
  });
  const emailTexual = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHtml = mailGenerator.generatePlaintext(options.mailgenContent);

  const transpoter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTexual,
    html: emailHtml,
  };
  try {
    await transpoter.sendMail(mail);
  } catch (error) {
    console.error(
      "Email service failed siliently. Make sure that you provide your MAILTRAP credentials in the .env file",
      console.error("Error: ", error),
    );
  }
};

// it is used to verfify the email
const emailVerficationMailgenContent = (username, verficationUrl) => {
  return {
    body: {
      name: username,
      inrto: "Welcome to our App! we are exited to have you on board.",
      action: {
        instructions:
          "To verify your email please click on the following button",
        button: {
          color: "#1aae5a",
          text: "verify your email",
          link: verficationUrl,
        },
      },
    },
    outro:
      "Need help, or have question?Just reply to this email, we'd love to help",
  };
};

const forgetPasswordgenContent = (username, passwordrRestUrl) => {
  return {
    body: {
      name: username,
      inrto: "We got a request to reset the password of your account",
      action: {
        instructions:
          "To verify ypur password please click on the following button",
        button: {
          color: "#1aae5aff",
          text: "reset password",
          link: passwordrRestUrl,
        },
      },
    },
    outro:
      "Need help, or have question?Just reply to this email, we'd love to help",
  };
};

export { emailVerficationMailgenContent, forgetPasswordgenContent, sendEmail };
