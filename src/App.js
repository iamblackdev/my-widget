import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [messagebox, setMessagebox] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    message: "",
  });
  const toggleMessageBox = () => {
    setMessageSent(false);
    setDetails({
      email: "",
      message: "",
    });
    setMessagebox((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    setMessageSent(true);
  };
  return (
    <div className="App">
      <div style={{ position: "fixed", bottom: "30px", right: "30px" }}>
        <div className={`message-container ${messagebox ? "" : "hidden"}`}>
          {messageSent ? (
            <h2>
              Your message hve been received we'll get back to you shortly
            </h2>
          ) : (
            <>
              <h2>We're not here, drop us an email...</h2>
              <form className="content" onSubmit={handleSubmit}>
                <input
                  required=""
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={details.email}
                  onChange={(e) =>
                    setDetails((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <textarea
                  required=""
                  id="message"
                  placeholder="Your message"
                  value={details.message}
                  onChange={(e) =>
                    setDetails((prev) => ({ ...prev, message: e.target.value }))
                  }
                ></textarea>
                <button>Submit</button>
              </form>
            </>
          )}
        </div>
        <div className="button-container" onClick={toggleMessageBox}>
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
    </div>
  );
}

export default App;
