import React from "react";
import styles from "./InfoCards.module.css";
import { FaBookOpen, FaGopuram, FaUniversity } from "react-icons/fa";

const cards = [
  {
    icon: <FaBookOpen className={styles.icon} />,
    title: "Become a Maha Punyadhaari",
    description:
      "Donate a Square Meter of the temple – It will cost <strong>$3500 per m²</strong> to build the temple.",
  },
  {
    icon: <FaGopuram className={styles.icon} />,
    title: "Donate a Moorthi",
    description: "Donate a Moorthi of Hawkes Bay Hindu Temple.",
  },
  {
    icon: <FaUniversity className={styles.icon} />,
    title: "Bank Transfer",
    description:
      "Our temple trust bank account.<br /><strong>12-3147-0523029-00</strong>",
  },
];

const InfoCards = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={styles.container}>
        {cards.map((card, i) => (
          <div className={styles.card} key={i}>
            {card.icon}
            <h3>{card.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: card.description }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;
