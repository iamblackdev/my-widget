/**
 * @desc send mail func.".
 */
import emailjs from "@emailjs/browser";

const sendMail = async (form) => {
  const data = await new Promise((resolve, reject) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          resolve(result.text);
        },
        (error) => {
          reject(error.text);
        }
      );
  });
  return data;
};
export default sendMail;
