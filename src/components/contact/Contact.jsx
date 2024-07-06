import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./contact.module.css";

const Contact = () => {
  const notify = () => {
    toast.success("Thanks for contacting us!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
    notify();
  };

  return (
    <div className={styles.container}>
      <h1>Need any help!</h1>
      <p>
        Got a question or feedback? Reach out to us; we&apos;re here to help.
      </p>
      <div className={styles.content}>
        <div className={styles.form}>
          <form onSubmit={sendEmail}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Josh Brolin"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="josh@brolin.com"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message here"
              rows={8}
              className={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div>
              <button className={styles.btn} type="submit">
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
