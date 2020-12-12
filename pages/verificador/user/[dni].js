import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../../../styles/Profile.module.css";
import stylesNotFound from "./../../../styles/Verify.module.css";
import stylesVerify from "../../../styles/Verify.module.css";
import Certificate from "./../../../components/user/Certificate";

import { useRouter } from "next/router";

import { getFetch } from "../../../client/client";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState();
  const [isError, setIsError] = useState(false);
  const [credentials, setCredentials] = useState();

  const path = {
    profileImg: "/images/profile.svg",
    certificate: "/images/certificado.jpg",
    addImg: "/images/plus.svg",
    verificateImg: "/images/verificate.svg",
  };

  const router = useRouter();

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await getFetch(`/users/${router.query.dni}/credentials`);
      if (!res.data.errors) {
        setUserInfo(res.data.user);
        setCredentials(res.data.credentials);
      } else setIsError(true);
    };
    if (router.query.dni) {
      getUserInfo();
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Coraliapp | Profile</title>
      </Head>
      {userInfo && (
        <>
          <div
            className={styles.profileContainer}
            style={{
              gridTemplateRows: "3fr 30px auto",
              gridRowGap: "20px",
            }}
          >
            <div className={styles.informationContainer}>
              <div className={styles.datosContainer}>
                <div className={styles.logoContainer}>
                  <img src={path.profileImg} alt="profile" />
                </div>
                <h1 className={styles.name}>
                  {userInfo.name[0].toUpperCase() + userInfo.name.slice(1)}{" "}
                  {userInfo.last_name[0].toUpperCase() +
                    userInfo.last_name.slice(1)}
                </h1>
                <div className={styles.editButtonContainer}>
                  {userInfo.linkedin ? (
                    <Link href={userInfo.linkedin}>
                      <button className={stylesVerify.contactToLinkedin}>
                        Contactar
                      </button>
                    </Link>
                  ) : (
                    <button
                      className={stylesVerify.contactToLinkedin}
                      disabled={true}
                      style={{
                        background: "rgba(66, 153, 225, 0.6)",
                        cursor: "not-allowed",
                      }}
                    >
                      Contactar
                    </button>
                  )}
                </div>
              </div>
            </div>
            <h2
              className={styles.name}
              style={{
                textAlign: "left",
                width: "95%",
                margin: "auto",
                fontSize: "20px",
              }}
            >
              Certificados vigentes:{" "}
            </h2>
            <div className={styles.certificateContainer}>
              <div className={styles.itemsContainer}>
                {credentials != null && credentials.length > 0 && (
                  <>
                    {credentials.map((credential) => (
                      <Certificate
                        certificate={path.certificate}
                        verificateIcon={path.verificateImg}
                        credentialInformation={credential}
                        key={credential.id}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={stylesVerify.otherVerifyContainer}>
            <div className={stylesVerify.otherVerifyButtonContainer}>
              <Link href="/verificador">
                <button className={stylesVerify.otherVerifyButton}>
                  Realizar otra verificación
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
      {isError && (
        <div className={stylesNotFound.notFoundContainer}>
          <h1 className={stylesNotFound.notFoundTitle}>Lo sentimos</h1>
          <p className={stylesNotFound.notFoundText}>
            Coralify no ha encontrado certificados con ese dni.
          </p>
          <div style={{ width: "64px", margin: "20px auto" }}>
            <Link href="/verificador">
              <button className={stylesNotFound.backButton}>Volver</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
