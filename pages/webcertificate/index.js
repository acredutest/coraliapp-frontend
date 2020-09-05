import styles from "../../styles/Webcertificate.module.css";
import { SiLinkedin } from "react-icons/si";

export default function WebCertificate() {
  const path = {
    logo: "/images/LogoCodeable.svg",
    download: "/images/icondownload.svg",
    share: "/images/iconshare.svg",
    instagram: "/images/iconinstagram.svg",
    whatsapp: "/images/iconwhatsapp.svg",
    facebook: "/images/iconface.svg",
    youtube: "/images/iconyoutube.svg",
    linkedin: "/images/iconlinkedin.svg",
    certificate: "/images/certificado.jpg",
  };
  return (
    <div className={styles.container}>
      {/* <div className={styles.preview}></div>
      <div className={styles.success}></div> */}
      <div className={styles.backgroundcertificate}>
        <img src={path.certificate} className={styles.certificate} />
      </div>
      <div className={styles.content}>
        <div className={styles.privatebuttons}>
          <h2 className={styles.idcertificate}>ID certificado: 1534275</h2>
          <div className={styles.privatebuttonslinkedin}>
            <a href="" className={styles.publicbuttonblue}>
              Compartir en <SiLinkedin className={styles.SiLinkedin} />
            </a>
            <a href="" className={styles.publicbuttonwhite}>
              Agregar a <SiLinkedin className={styles.SiLinkedin} />
            </a>
          </div>
          <div className={styles.privatebuttoncircle}>
            <a href="">
              <img src={path.download} className={styles.bcircle} />
            </a>

            <a href="">
              <img src={path.share} className={styles.bcircle} />
            </a>
          </div>
        </div>
        {/* <div className={styles.publicbutton}>
          <h2 className={styles.idcertificate}>ID certificado: 1534275</h2>
          <button>Verificar Certificado</button>
        </div> */}
        <div className={styles.institutiondata}>
          <h1 className={styles.title}>Fullstack web developer bootcamp</h1>
          <div className={styles.rrss}>
            <a href="">
              <img src={path.linkedin} className={styles.rrsscircle} />
            </a>
            <a href="">
              <img src={path.facebook} className={styles.rrsscircle} />
            </a>
            <a href="">
              <img src={path.youtube} className={styles.rrsscircle} />
            </a>
            <a href="">
              <img src={path.whatsapp} className={styles.rrsscircle} />
            </a>
            <a href="">
              <img src={path.instagram} className={styles.rrsscircle} />
            </a>
          </div>
          <hr className={styles.line}></hr>
          <div className={styles.wrappdata}>
            <img src={path.logo} className={styles.logoinstitution} />
            <div className={styles.nameinstitution}>
              <h2>Codeable</h2>
              <a href="">https://codeable.pe</a>
            </div>

            <div className={styles.datauser}>
              <h2 className={styles.nameuser}>Joel Eche</h2>
              <p className={styles.etiquetauser}>Bootcamper</p>
            </div>
          </div>
          <hr className={styles.line}></hr>
          <div className={styles.description}>
            <p>
              Es un programa educativo intensivo de programación fullstack.
              Durante 6 meses aprendes Ruby on Rails, React, Redux, los
              fundamentos de la ciencias de la computación e inglés. En codeable
              tendrás la oportunidad de aprender de guest speakers durante
              nuestros Fireside Chats y conectarte con el mundo profesional de
              la industria de tecnología. También fortalecerás tus competencias
              profesionales mientras que recibes el apoyo para conseguir un
              trabajo en el mundo de tecnología por medio de nuestro componente
              de Career Coaching durante el bootcamp.
            </p>
          </div>
          <div className={styles.datevalidate}>
            <h3 className={styles.datevalidateh3}>
              Emitido el: 13 de septiembre 2020
            </h3>
            <h3 className={styles.datevalidateh3}>Expira el: Nunca expira</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
