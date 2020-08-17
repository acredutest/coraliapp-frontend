import { useContext, useState } from 'react';
import Link from 'next/link';
import { Spinner } from '@chakra-ui/core';
import styles from './../../../styles/Certificates.module.scss';
import { ActionButton } from './../index';

export const ActionSection = ({ isLoading, setIsLoading }) => {
  return (
    <>
      <section className={(styles.section, styles.searchSection)}>
        <h2>Documento de Identidad</h2>
        <input type="text" placeholder="81675828" />
        <ActionButton
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          background="#9166EB"
        >
          Buscar Certificados
        </ActionButton>
        {false && (
          <>
            <p>
              Este documento nos ayudará a notificar cuando se genere algún
              certificado para ti en el sistema.
            </p>

            <ActionButton
              background="#4BC0D0"
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            >
              <Link href="./user/profile">Ir a mi Perfil</Link>
            </ActionButton>
            <Link style={{ color: '#9166EB' }}>Buscar Certificados</Link>
          </>
        )}
      </section>
      {isLoading && (
        <div className={styles.loader}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="rgba(165, 163, 163,0.5)"
            color="#9166EB"
            size="lg"
          />
        </div>
      )}
    </>
  );
};
