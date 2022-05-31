/**
 * @desc send mail func.".
 */
import emailjs from "@emailjs/browser";

const sendMail = async (form: string | HTMLFormElement): Promise<string> => {
  const data: string = await new Promise((resolve, reject) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
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
