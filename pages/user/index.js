import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Profile.module.css";
import Certificate from "./certificate";

import ProtectedRoute from "./../../hocs/ProtectedRoute";
import { useSelector } from "react-redux";

const Profile = () => {
  const [currentPage, setCurrentPage] = useState("certificate");

  const user = useSelector((state) => state.auth.user);

  const path = {
    profileImg: "/images/profile.svg",
    certificate: "/images/certificado.jpg",
    addImg: "/images/plus.svg",
    verificateImg: "/images/verificate.svg",
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
            <h1 className={styles.name}>
              {user.name} {user.last_name}
            </h1>
            <div className={styles.editButtonContainer}>
              <button className={styles.editButton}>Editar Perfil</button>
            </div>
            <div className={styles.logoutButtonContainer}>
              <Link href="/">
                <button className={styles.logout}>Cerrar sesión</button>
              </Link>
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
            <div className={styles.itemsContainer}>
              <Certificate
                certificate={path.certificate}
                verificateIcon={path.verificateImg}
              />
              <Link href="/certificates">
                <button
                  className={`${styles.addCertificateButton} ${styles.itemContainer}`}
                >
                  <img src={path.addImg} className={styles.addIcon} />
                </button>
              </Link>
            </div>
          ) : null}
          {currentPage === "constancia" ? <h1>Constancia</h1> : null}
          {currentPage === "reverificar" ? <h1>reverificar</h1> : null}
        </div>
      </div>
    </div>
  );
};
// const User = () => {
//   return (
//     <>User</>
//   )
// }

export default ProtectedRoute(Profile);
