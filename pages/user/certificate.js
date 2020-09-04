import React from "react";
import styles from "../../styles/Profile.module.css";

export default function Certificate({
  certificate,
  verificateIcon,
  credentialInformation,
}) {
  return (
    <div className={styles.itemContainer}>
      <img src={certificate} alt="certificado" />
      <div className={styles.itemDescription}>
        <span className={`${styles.certificateStatus} ${styles.lightgray}`}>
          <img
            src={verificateIcon}
            alt="verificate"
            className={styles.verificateIcon}
          />
          Verificado
        </span>
        <h1 className={styles.certificateTitle}>
          Certificado FullStack by Codeable
        </h1>
        <p className={styles.darkgray}>{credentialInformation}</p>
        <div className={styles.shareContainer}>
          <img src="/images/linkedin.svg" className={styles.shareIcon} />
          <div className={styles.shareInfo}>
            <p className={styles.darkgray}>Compartido en Linkedin</p>
            <span className={styles.lightgray}>Agosto 18</span>
          </div>
        </div>
      </div>
    </div>
  );
}
