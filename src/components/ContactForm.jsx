import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact-form-container">
      <p className="contact-form-heading">Complete the form below</p>
      <div className="contact-form-fields">
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="input-box"
          type="text"
        />
        <label htmlFor="phone">Phone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="input-box"
          type="text"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input-box"
          type="email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          className="message-textarea"
          name="message"
          cols="30"
          rows="6"
        ></textarea>
        <button id="form-submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default ContactForm;
