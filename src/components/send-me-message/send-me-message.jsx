import React, { useState } from "react";
import "./send-me-mesage.css";

const SendMeMessage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleThankYou = () => {
    // Check if all required fields are filled
    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
      setSubmitted(true);
    } else {
      alert("Please fill in all required fields before submitting.");
    }
  };

  return (
    <div className="form-container">
      {!submitted ? (
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            value={name}
            onChange={handleNameChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={handleEmailChange}
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            value={message}
            onChange={handleMessageChange}
          ></textarea>

          <button type="button" onClick={handleThankYou}>
            Send Message
          </button>
        </form>
      ) : (
        <div className="thank-you-message">
          <p className="p-tag">
            Thank you for your message! I will get back to you soon.
          </p>
        </div>
      )}
    </div>
  );
};

export default SendMeMessage;
