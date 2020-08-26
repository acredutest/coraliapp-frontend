import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "./footer";
import { pdfjs } from `react-pdf`;
import * as serviceWorker from "./serviceWorker";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function Home() {
  const path = {
    logo: "/img/Logo-home.png",
    logofooter: "/img/Logo_coralify_footer.png",
    facebook: "/img/icon_facebook1.png",
    youtube: "/img/icon_youtube1.png",
    linkedin: "/img/icon_linkedin1.png",
    background: "/img/landing-users.png",
  };
  return (
    <div className={styles.container}>
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

        <Footer />
      </div>
    </div>
  );
}
serviceWorker.unregister();
