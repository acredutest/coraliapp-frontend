import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { pdfjs } from "react-pdf";
import * as serviceWorker from "./serviceWorker";
import { Footer } from "../components/common/Footer";

export default function Home() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const path = {
    logo: "/images/logo.png",
    logofooter: "/images/logo-small.png",
    facebook: "/img/icon_facebook1.png",
    youtube: "/img/icon_youtube1.png",
    linkedin: "/img/icon_linkedin1.png",
    background: "/img/landing-users.png",
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
serviceWorker.unregister();
