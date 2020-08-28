import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Profile.module.css";
import stylesVerify from "../../styles/Verify.module.css";
import Certificate from "./../user/certificate";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { logout } from "./../../slices/authSlice";
import { useRouter } from "next/router";

const UserProfile = () => {
  //   const user = useSelector((state) => state.auth.user);}
  const user = {
    name: "Nicolle",
    last_name: "Quispe",
  };

  const credentials = useSelector((state) => state.credentials.credentials);
  const dispatch = useDispatch();

  const path = {
    profileImg: "/images/profile.svg",
    certificate: "/images/certificado.jpg",
    addImg: "/images/plus.svg",
    verificateImg: "/images/verificate.svg",
  };

  const router = useRouter();
  const base64 = router.query.data;
  const data = JSON.parse(atob(base64));
  console.log(data.data);
  data.data.map((user) => console.log(user.id));

  return (
    <div className={styles.container}>
      <Head>
        <title>Coraliapp | Profile</title>
      </Head>
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
              {user.name} {user.last_name}
            </h1>
            <div className={styles.editButtonContainer}>
              <button className={stylesVerify.contactToLinkedin}>
                Contactar
              </button>
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
    </div>
  );
};

export default UserProfile;
