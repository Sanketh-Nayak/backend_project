import Mailgen from "mailgen";

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

export { emailVerficationMailgenContent, forgetPasswordgenContent };
