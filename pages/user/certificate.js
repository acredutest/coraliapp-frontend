import React from "react";
import styles from "../../styles/Profile.module.css";

export default function Certificate({
  certificate,
  verificateIcon,
  credentialInformation,
}) {
  return (
    <div className={styles.itemContainer}>
      <img
        src={certificate}
        alt="certificado"
        style={{ width: "180px", height: "138pxs" }}
      />
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
          {credentialInformation.title} by{" "}
          {credentialInformation.name_institution}
        </h1>
        <p className={styles.darkgray}>{credentialInformation.description}</p>
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
