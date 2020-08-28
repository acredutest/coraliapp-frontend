import React from "react";
import Head from "next/head";
import styles from "./../../styles/Verify.module.css";
import stylesCertificate from "./../../styles/Certificates.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

function VerifyCertificate() {
  const path = {
    shieldLightBlue: "/images/shieldLightBlue.svg",
    padLock: "/images/padLock.svg",
    certificateImg: "/images/certificado.jpg",
    frame: "/images/frame.png",
  };

  const router = useRouter();
  const base64 = router.query.data;
  const data = JSON.parse(atob(base64));
  console.log(data);
  return (
    <div className={styles.certificadoBody}>
      <Head>
        <title>Coraliapp | Verify certificate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.certificadoContainer}>
        <section
          className={`${stylesCertificate.section} ${styles.widtOneHundred}`}
          style={{ width: "90%" }}
        >
          <div className={stylesCertificate.uploadCertificateImg}>
            <img className={stylesCertificate.frameImg} src={path.frame} />
            <img
              className={stylesCertificate.certificateImg}
              src={path.certificateImg}
            />
          </div>
        </section>
        <div className={`${styles.grayBorder} ${styles.displayFlex}`}>
          <img src={path.shieldLightBlue} alt="shield" className={styles.img} />
          <div>
            <h1 className={`${styles.certificadoTitle} ${styles.wordBold}`}>
              Credencial verificada
            </h1>
            <p className={styles.certificadoContent}>
              El certificado digital fue encontrado en la base de datos de
              Coralify con los detalles mostrados.
            </p>
          </div>
        </div>

        <div className={`${styles.padlockContainer} ${styles.displayFlex}`}>
          <img src={path.padLock} alt="padlock" className={styles.img} />
          <p className={styles.padlockContent}>
            Esta credencial se encuentra asegurada bajo un código unico
            N°1234542 provisto a la institución que suscribe el certificado
          </p>
        </div>
        <div className={styles.grayBorder}>
          <div>
            <h1 className={styles.certificadoTitle}>
              Emisor: <span className={styles.wordBold}>Codeable Perú</span>
            </h1>
          </div>
          <p className={styles.certificadoContent}>
            fecha de emisión:{" "}
            <span className={styles.wordBold}>25 de septiembre 20202</span>
          </p>
          <p className={styles.certificadoContent}>
            fecha de expiración:{" "}
            <span className={styles.wordBold}>Nunca expira</span>
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <Link href="/verificador">
            <button className={styles.backButton}>Volver</button>
          </Link>
          <Link href="/verificador">
            <button className={styles.verifyWithOtherInfo}>
              Verificar con otros datos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VerifyCertificate;
