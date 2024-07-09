import React, { useState } from "react";
import styles from "./faq.module.css";

const faqs = [
  {
    question: "What is the best time to visit India?",
    answer:
      "The best time to visit India is from October to March when the weather is pleasant and suitable for travel.",
  },
  {
    question: "Do I need a visa to travel to India?",
    answer:
      "Yes, most travelers require a visa to enter India. You can apply for an e-visa online or obtain one from an Indian consulate.",
  },
  {
    question: "What are the must-visit places in India?",
    answer:
      "Some must-visit places in India include the Taj Mahal, Jaipur, Kerala backwaters, Varanasi, and Goa beaches.",
  },
  {
    question: "What is the local currency in India?",
    answer:
      "The local currency in India is the Indian Rupee (INR). It's recommended to carry some cash for small transactions, but credit/debit cards are widely accepted in cities.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h1>FAQ</h1>
      <p>Frequently asked questions.</p>
      <div className={styles.faqs}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faq}>
            <div className={styles.question} onClick={() => toggleFaq(index)}>
              {faq.question}
            </div>
            <div
              className={`${styles.answer} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
