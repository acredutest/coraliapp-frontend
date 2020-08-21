import Link from "next/link";
import styles from "./../../../styles/Certificates.module.scss";

export const InfoSection = ({ setCurrentState }) => {
  return (
    <div className={styles.infoSection}>
      <p className={styles.infoSectionParagraph}>
        Este documento nos ayudará a notificar cuando se genere algún
        certificado para ti en el sistema.
      </p>

      <Link href="/user">
        <button className={styles.goProfileButton}>Ir a mi perfil</button>
      </Link>

      <span
        className={styles.goSearchButton}
        onClick={() => setCurrentState("onSearch")}
      >
        Buscar Certificados
      </span>
    </div>
  );
};
