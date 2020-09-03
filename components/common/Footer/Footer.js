import styles from "./../../../styles/Home.module.css";
import { Button, Text, Box, Flex, Link } from '@chakra-ui/core';

export const Footer = () => {
  const path = {
    logo: "/images/logo-small.png",
    facebook: "/images/facebook-icon-white.png",
    youtube: "/images/youtube-icon-white.png",
    linkedin: "/images/linkedin-icon-white.png",
  };

  return (
    <footer className={styles.footer}>
      <Link className={styles.copyrightText} href="https://coralify.com" target="_blank">
        <Flex alignItems="center">
          <Text fontSize="sm">Powered by</Text>
          <img src={path.logo} alt="coralify" />
          <Text fontSize="sm">© 2020</Text>
        </Flex>
      </Link>
      <div className={styles.icons}>
        <Link href="https://www.facebook.com/coralify" target="_blank">
          <img src={path.facebook} alt="facebook" />
        </Link>
        <Link href="https://www.youtube.com/channel/UCa23OQNMhf81BZV7_whVfKg" target="_blank">
          <img src={path.youtube} alt="youtube" />
        </Link>
        <Link href=" https://www.linkedin.com/company/coralify" target="_blank">
          <img src={path.linkedin} alt="linkedin" />
        </Link>
      </div>
    </footer>
  );
}
