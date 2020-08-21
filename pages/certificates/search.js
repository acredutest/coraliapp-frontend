import React, { useState, useContext } from "react";
import Head from "next/head";
import styles from "./../../styles/Certificates.module.scss";
import FrameCertificate from "./_components/FrameCertificate";
import DNIForm from "./_components/DNIForm";
import InfoSection from "./_components/InfoSection";

const messages = {
  onSearch: `Descubre que certificados tienes disponibles para ti en el sistema,
    ingresa el número de tu documento de identidad para buscar.`,
  notFound: `En este momento no tienes certificados tuyos disponibles en el sistema.`,
  success: "Hemos encontrado unos certificados a tu nombre  🎉",
};

const Certificates = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(messages.initial);
  const [currentState, setCurrentState] = useState("notFound");
  return (
    <>
      <Head>
        <title>Coraliapp | Certificates</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.container}>
        <section
          className={styles.section}
          style={{ borderBottom: "1px solid #C4C4C4", paddingBottom: "10px" }}
        >
          <FrameCertificate
            state={currentState}
            message={messages[currentState]}
          />
        </section>
        <DNIForm
          state={currentState}
          setState={setCurrentState}
          message={message}
          setMessage={setMessage}
        />
        {currentState !== "onSearch" && (
          <InfoSection setCurrentState={setCurrentState} />
        )}
      </main>
    </>
  );
};

export default Certificates;
