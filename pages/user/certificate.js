import React from "react";
import styles from "../../styles/Profile.module.css";
// import certificado from "./images/certificado.jpg";

export default function Certificate({ certificate }) {
  return (
    <div className={styles.itemsContainer}>
      <img src={certificate} alt="certificado" />
      <div className={styles.itemDescription}>
        <span className={styles.certificateStatus}>Verificado</span>
        <h1 className={styles.certificateTitle}>
          Certificado FullStack by Codeable
        </h1>
        <p>
          Bootcamp de formacion FullStack por seis meses, HTML, css ,
          javascript, reactjs, ruby on rails
        </p>
      </div>
    </div>
  );
}
