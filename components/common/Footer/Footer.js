import styles from "./../../../styles/Home.module.css";
import { Button, Text, Box, Flex } from '@chakra-ui/core';

export const Footer = () => {
  const path = {
    logo: "/images/logo-small.png",
    facebook: "/images/facebook-icon-white.png",
    youtube: "/images/youtube-icon-white.png",
    linkedin: "/images/linkedin-icon-white.png",
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p className={styles.copyrighttext}>
          <a href="https://coralify.com">Powered by</a>
        </p>
        <a href="https://coralify.com">
          <img src={path.logo} alt="logofooter" />
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
