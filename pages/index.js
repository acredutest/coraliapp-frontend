import Head from "next/head";
import Link from "next/link";

import { pdfjs } from "react-pdf";

import styles from "../styles/Home.module.css";
import { Footer } from "../components/common/Footer";

export default function Home() {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.1.266/pdf.worker.js`;
  const path = {
    logo: "/images/logo.png",
    logofooter: "/images/logo-small.png",
  };
  return (
    <>
      <Head>
        <title>Coraliapp | Home</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.content}>
          <img className={styles.logo} src={path.logo} alt="logo" />

          <h3 className={styles.title}>¡Digitaliza tu comunidad!</h3>
          <p className={styles.subtitle}>
            Ayudamos a organizadores independientes de eventos y cursos a emitir
            certificados y badges digitales para sus estudiantes y clientes.
          </p>
          <Link href="/signin">
            <div className={styles.button}>
              <p className={styles.buttontext}>Ingresar</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
// serviceWorker.unregister();
