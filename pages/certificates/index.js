import React, { useState, useContext } from 'react';
import Head from 'next/head';
import styles from './../../styles/Certificates.module.scss';
import { FrameCertificate } from './_components/FrameCertificate';
import { ActionSection } from './_components/ActionSection';

export const ActionButton = ({
  background,
  isLoading,
  setIsLoading,
  children,
}) => {
  return (
    <button onClick={() => setIsLoading(!isLoading)} style={{ background }}>
      {children}
    </button>
  );
};

const Certificates = () => {
  const [isLoading, setIsLoading] = useState(false);
  const ContextCertificate = React.createContext({ isLoading, setIsLoading });
  const [
    message,
    setMessage,
  ] = useState(`Descubre que certificados tienes disponibles para ti en el sistema,
    ingresa el número de tu documento de identidad para buscar.`);
  const paths = {
    searchImg: '/images/search.svg',
    sadImg: '/images/sad.svg',
    cloudUpload: '/images/cloud-upload.svg',
  };

  return (
    <ContextCertificate.Provider value={(isLoading, setIsLoading)}>
      <Head>
        <title>Coraliapp | Certificates</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.container}>
        <section
          className={styles.section}
          style={{ borderBottom: '1px solid #C4C4C4', paddingBottom: '10px' }}
        >
          <FrameCertificate>
            <img className={styles.frameIconImg} src={paths.searchImg} />
          </FrameCertificate>
          <p className={styles.uploadDescription}>{message}</p>
        </section>
        <ActionSection isLoading={isLoading} setIsLoading={setIsLoading} />
      </main>
    </ContextCertificate.Provider>
  );
};

export default Certificates;
