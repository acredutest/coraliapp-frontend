import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Profile.module.css";

import ProtectedRoute from "./../../hocs/ProtectedRoute";
import { useSelector } from "react-redux";
import Header from "./../../components/user/Header";
import { Avatar, Flex } from "@chakra-ui/core";

import { getFetch } from "./../../client/client";
import Certificate from "./../../components/user/Certificate";

const Profile = () => {
  const [currentPage, setCurrentPage] = useState("certificate");

  const user = useSelector((state) => state.auth.user);
  const [credentials, setCredentials] = useState();

  const path = {
    profileImg: "/images/profile.svg",
    certificate: "/images/certificado.jpg",
    addImg: "/images/plus.svg",
    verificateImg: "/images/verificate.svg",
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await getFetch(`/users/${user.dni}/credentials`);
      if (!res.data.errors) {
        setCredentials(res.data.credentials);
      }
    };
    if (user.dni) {
      getUserInfo();
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Coraliapp | Profile</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.profileContainer}>
          <Flex flexDirection="column" alignItems="center" justifyContent="center" className={styles.informationContainer}>
            <Avatar name={user.name} src={user.image} size="lg" />
            <h1 className={styles.name}>
              {user.name} {user.last_name}
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

                <Link href="/user/uploadcertificate">
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
