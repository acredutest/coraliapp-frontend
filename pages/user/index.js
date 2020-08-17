import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Profile.module.css";
import Certificate from "./certificate";

export default function Profile() {
  const [currentPage, setCurrentPage] = useState("certificate");

  const path = {
    profileImg: "/images/profile.svg",
    certificate: "/images/certificado.jpg",
    addImg: "/images/plus.svg",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coraliapp | Profile</title>
      </Head>
      <div className={styles.profileContainer}>
        <div className={styles.informationContainer}>
          <div className={styles.datosContainer}>
            <div className={styles.logoContainer}>
              <img src={path.profileImg} alt="profile" />
            </div>
            <h1 className={styles.name}>Pedro Valdivia</h1>
            <div className={styles.editButtonContainer}>
              <button className={styles.editButton}>Editar Perfil</button>
            </div>
          </div>
        </div>
        <div className={styles.certificateButtonsContainer}>
          <button
            className={`${
              currentPage === "certificate"
                ? styles.currentCertificateButton
                : styles.noCurrentCertificateButton
            } ${styles.certificateButton}`}
            onClick={() => setCurrentPage("certificate")}
          >
            <span className={styles.quantityCertificates}>0</span>
            Certificados Vigentes
          </button>
          <button
            className={`${
              currentPage === "constancia"
                ? styles.currentCertificateButton
                : styles.noCurrentCertificateButton
            } ${styles.certificateButton}`}
            onClick={() => setCurrentPage("constancia")}
          >
            <span className={styles.quantityCertificates}>0</span>
            Constancias Vigentes
          </button>
          <button
            className={`${
              currentPage === "reverificar"
                ? styles.currentCertificateButton
                : styles.noCurrentCertificateButton
            } ${styles.certificateButton}`}
            onClick={() => setCurrentPage("reverificar")}
          >
            <span className={styles.quantityCertificates}>0</span>
            Para revalidar
          </button>
        </div>
        <div className={styles.certificateContainer}>
          {currentPage === "certificate" ? (
            <>
              <Certificate certificate={path.certificate} />
              <Link href="/certificates">
                <button
                  className={`${styles.addCertificateButton} ${styles.itemsContainer}`}
                >
                  <img src={path.addImg} />
                </button>
              </Link>
            </>
          ) : null}
          {currentPage === "constancia" ? <h1>Constancia</h1> : null}
          {currentPage === "reverificar" ? <h1>reverificar</h1> : null}
        </div>
      </div>
    </div>
  );
}
