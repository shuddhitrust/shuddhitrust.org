const sgMail = require("@sendgrid/mail"); //sendgrid library to send emails
const request = require("request");

exports.handler = function (event, context, callback) {
  const {
    SENDGRID_EMAIL_API_KEY,
    RECAPTCHA_SECRET,
    SEND_TO_EMAIL,
  } = process.env;

  sgMail.setApiKey(SENDGRID_EMAIL_API_KEY);

  // Send user response
  const send = (statusCode, body) => {
    callback(null, {
      statusCode,
      body: JSON.stringify(body),
    });
  };

  const sendMessage = () => {
    console.log("event.body", event.body, "event", event);
    const req = JSON.parse(event.body);
    const response = req["form"];
    const secretKey = RECAPTCHA_SECRET;
    const captchaResponse = req["captchaResponse"];
    const remoteip = event.headers["client-ip"];

    const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaResponse}&remoteip=${remoteip}`;
    request(verifyUrl, (err, reponse, body) => {
      body = JSON.parse(body);
      // If successful...
      if (body.success !== undefined && body.success) {
        let formData = {
          name: response["name"],
          email: response["email"],
          subject: response["subject"],
          content: response["content"],
        };

        let emailContentHTML = `<html><body><p><b>${formData.name} (${formData.email})</b>:</p><hr><p><b>${formData.subject}</b></p><p>${formData.content}</p><br />
        <small style="color: gray; font-style: italic;">This email contains a message sent via the contact form on shuddhifund.org</small>
        </body></html>`;

        let emailContentPlain = `From: ${formData.name} <${formData.email}>
        Subject: [shuddhitrust.org] ${formData.subject}
        Content: ${formData.content}`;

        let mailOptions = {
          to: SEND_TO_EMAIL,
          from: formData.name + " <" + formData.email + ">",
          subject: "[shuddhitrust.org] " + formData.subject,
          text: emailContentPlain,
          html: emailContentHTML,
        };
        sgMail
          .send(mailOptions)
          .then(() => {
            console.log(`Mail from ${mailOptions.from} is sent!`);
            send(200, { success: true, msg: "Captcha verified successfully" });
          })
          .catch((error) => {
            const { message, code, response } = error;
            console.error(
              "Something went wrong. Details => ",
              `${error.code} :${error.message}`
            );
            send(error.code, { success: false, msg: error.message });
          });
      } else {
        console.log("Recaptcha validation failed...");
        send(422, {
          success: false,
          msg: `Captcha verification failed! Details => ${body["error-codes"][0]}`,
        });
      }
    });
  };

  // Make sure method is GET
  if (event.httpMethod == "POST") {
    // Run
    sendMessage();
  }
};
