import styles from "../styles/Home.module.css";

export default function Footer() {
  const path = {
    logofooter: "/images/logo-small.png",
    facebook: "/img/icon_facebook1.png",
    youtube: "/img/icon_youtube1.png",
    linkedin: "/img/icon_linkedin1.png",
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p className={styles.copyrighttext}>
          <a href="https://coralify.com">Powered by</a>
        </p>
        <a href="https://coralify.com">
          <img src={path.logofooter} alt="logofooter" />
        </a>
        <p className={styles.copyrighttext}>
          <a href="https://coralify.com">© 2020</a>
        </p>
      </div>
      <div className={styles.icons}>
        <a href="https://www.facebook.com/coralify">
          <img src={path.facebook} alt="facebook" />
        </a>
        <a href="https://www.youtube.com/channel/UCa23OQNMhf81BZV7_whVfKg">
          <img src={path.youtube} alt="youtube" />
        </a>
        <a href=" https://www.linkedin.com/company/coralify">
          <img src={path.linkedin} alt="linkedin" />
        </a>
      </div>
    </footer>
  );
}
