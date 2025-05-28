import React from 'react';
import styles from './TempleFeatures.module.css';
import { FaPlaceOfWorship, FaHandPaper, FaBookOpen, FaOm } from 'react-icons/fa';

const features = [
  {
    icon: <FaPlaceOfWorship />,
    title: 'Temple of Many Gods',
    description: 'The temple will home various Hindu gods – Ganesha, Shiva, Shakthi, Vishnu, Lakshmi, Hanuman, Ram, Muruga, Mari Amman etc',
  },
  {
    icon: <FaHandPaper />,
    title: 'Culture Centre',
    description: 'Culture Centre will host various Hindu Cultural Celebrations, Marriages etc',
  },
  {
    icon: <FaBookOpen />,
    title: 'Education Centre',
    description: 'Temple will run classes to focus on Vedas, Hindu Dharma, Slokas and Mantras.',
  },
  {
    icon: <FaOm />,
    title: 'For All Hindus',
    description: 'Temple will bring all Hindu cultures together and propagate Hinduism among the local population.',
  },
];

const TempleFeatures = ({ darkMode }) => {
  return (
    <section className={`${styles.section} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TempleFeatures;