import React, { useState, useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import "./App.css";
import sendMail from "./api/sendMail";

const validationSchema = Yup.object().shape({
  customer_name: Yup.string().required().label("Name"),
  reply_to: Yup.string().required().email().label("Email"),
  message: Yup.string().required().min(3).label("Message"),
});

const href = window.location.href;
const hostName = window.location.hostname;
function App({ email, primary_color }) {
  const form = useRef();

  const [messagebox, setMessagebox] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleMessageBox = () => {
    setMessageSent(false);
    setMessagebox((prev) => !prev);
  };

  const onSubmit = async (e, { resetForm }) => {
    setError("");
    setLoading(true);
    try {
      await sendMail(form.current);
      setLoading(false);
      setMessageSent(true);
      resetForm();
    } catch (error) {
      setLoading(false);
      setError("An error occured");
    }
  };

  return (
    <div className="app">
      <div className={`message-container ${messagebox ? "" : "hidden"}`}>
        {messageSent ? (
          <h2 style={{ backgroundColor: primary_color }}>
            Your message was sent successfully.
          </h2>
        ) : (
          <Formik
            initialValues={{
              customer_name: "",
              reply_to: "",
              message: "",
            }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              setFieldTouched,
              errors,
              touched,
            }) => (
              <>
                <h2 style={{ backgroundColor: primary_color }}>
                  We're not here, drop us an email...
                </h2>
                <form
                  ref={form}
                  className="content"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                >
                  {loading && (
                    <div className="loader">
                      <div className="sk-chase">
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                      </div>
                    </div>
                  )}
                  {error && <small style={{ color: "red" }}>{error}</small>}
                  <input
                    type="text"
                    value={email}
                    name="support_mail"
                    readOnly
                    style={{ display: "none" }}
                  />
                  <input
                    type="text"
                    value={hostName}
                    name="host_name"
                    readOnly
                    style={{ display: "none" }}
                  />
                  <input
                    type="text"
                    value={href}
                    name="href"
                    readOnly
                    style={{ display: "none" }}
                  />

                  <input
                    name="customer_name"
                    type="text"
                    placeholder="Enter your full name"
                    value={values.name}
                    onBlur={() => setFieldTouched("customer_name")}
                    onChange={handleChange("customer_name")}
                  />
                  {touched["customer_name"] && errors["customer_name"] && (
                    <small style={{ color: "red" }}>
                      {errors["customer_name"]}
                    </small>
                  )}
                  <input
                    type="text"
                    name="reply_to"
                    placeholder="Enter your email address"
                    value={values.reply_to}
                    onBlur={() => setFieldTouched("reply_to")}
                    onChange={handleChange("reply_to")}
                  />
                  {touched["reply_to"] && errors["reply_to"] && (
                    <small style={{ color: "red" }}>{errors["reply_to"]}</small>
                  )}
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={values.message}
                    onBlur={() => setFieldTouched("message")}
                    onChange={handleChange("message")}
                  ></textarea>
                  {touched["message"] && errors["message"] && (
                    <small style={{ color: "red" }}>{errors["message"]}</small>
                  )}
                  <button
                    type="submit"
                    style={{ backgroundColor: primary_color }}
                  >
                    Submit
                  </button>
                </form>
              </>
            )}
          </Formik>
        )}
      </div>
      <div
        className="button-container"
        onClick={toggleMessageBox}
        style={{ backgroundColor: primary_color }}
      >
        <img
          src="https://res.cloudinary.com/blackdev01/image/upload/v1653033877/chat_syfc7t.svg"
          className={`icon ${messagebox ? "hidden" : ""}`}
          alt="icon"
        />
        <img
          src="https://res.cloudinary.com/blackdev01/image/upload/v1653033877/cross_zo8i8n.svg"
          className={`icon ${messagebox ? "" : "hidden"}`}
          alt="icon"
        />
      </div>
    </div>
  );
}

export default App;
