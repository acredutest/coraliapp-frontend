import React from "react";
import styles from "../../styles/Profile.module.css";
// import certificado from "./images/certificado.jpg";

export default function Certificate({ certificate, verificateIcon }) {
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
        <p className={styles.darkgray}>
          Bootcamp de formacion FullStack por seis meses, HTML, css ,
          javascript, reactjs, ruby on rails
        </p>
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
