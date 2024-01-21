import "./send-me-mesage.css";

const SendMeMessage = () => {
  return (
    <div className="form-container">
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default SendMeMessage;
