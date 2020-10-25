import React, { useState, useContext } from "react";
import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./../../hocs/ProtectedRoute";

import styles from "./../../styles/Certificates.module.scss";
import FrameCertificate from "./../../components/public/FrameCertificate";
import DNIForm from "./../../components/public/DNIForm";
import InfoSection from "./../../components/public/InfoSection";

const messages = {
  onSearch: `Descubre que certificados tienes disponibles en el sistema,
    ingresa el número de tu documento de identidad para buscar.`,
  notFound: `En este momento no tenemos certificados en el sistema con el DNI ingresado.`,
  success: "Hemos encontrado unos certificados a tu nombre  🎉",
};

const Certificates = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(messages.initial);
  const [currentState, setCurrentState] = useState("onSearch");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const credentials = useSelector((state) => state.credentials.credentials);

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
          dispatch={dispatch}
          dni={"43457634"}
        />
        {currentState !== "onSearch" && (
          <InfoSection setCurrentState={setCurrentState} />
        )}
      </main>
    </>
  );
};

// export default ProtectedRoute(Certificates);
export default Certificates;
