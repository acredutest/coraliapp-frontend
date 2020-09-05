import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Profile.module.css";
import Certificate from "./_components/certificate";

import ProtectedRoute from "./../../hocs/ProtectedRoute";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { logout } from "./../../slices/authSlice";
import { HeaderUser } from "../../components/common/HeaderUser";
import { Avatar, Flex } from "@chakra-ui/core";

const Profile = () => {
  const [currentPage, setCurrentPage] = useState("certificate");

  const user = useSelector((state) => state.auth.user);
  const credentials = useSelector((state) => state.credentials.credentials);
  const dispatch = useDispatch();

  const path = {
    profileImg: "/images/profile.svg",
    certificate: "/images/certificado.jpg",
    addImg: "/images/plus.svg",
    verificateImg: "/images/verificate.svg",
  };

  return (
    <>
      <Head>
        <title>Coraliapp | Profile</title>
      </Head>
      <HeaderUser />
      <div className={styles.container}>
        <div className={styles.profileContainer}>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            className={styles.informationContainer}
          >
            <Avatar name={user.name} src={user.image} size="lg" />
            <h1 className={styles.name}>
              {user.name[0].toUpperCase() + user.name.slice(1)}{" "}
              {user.last_name[0].toUpperCase() + user.last_name.slice(1)}
            </h1>
          </Flex>
          <Flex className={styles.certificateButtonsContainer}>
            <button
              className={`${
                currentPage === "certificate"
                  ? styles.currentCertificateButton
                  : styles.noCurrentCertificateButton
              } ${styles.certificateButton}`}
              onClick={() => setCurrentPage("certificate")}
            >
              <span className={styles.quantityCertificates}>
                {credentials != null && credentials.length > 0
                  ? credentials.length
                  : 0}
              </span>
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
          </Flex>
          <div className={styles.certificateContainer}>
            {currentPage === "certificate" ? (
              <div className={styles.itemsContainer}>
                {credentials != null && credentials.length > 0 && (
                  <>
                    {credentials.map((credential) => (
                      <Certificate
                        certificate={path.certificate}
                        verificateIcon={path.verificateImg}
                        credentialInformation={credential}
                      />
                    ))}
                  </>
                )}

                <Link href="/certificates/search">
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
    </>
  );
};

export default ProtectedRoute(Profile);
