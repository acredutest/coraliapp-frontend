import styles from './../../../styles/Certificates.module.scss';

export const FrameCertificate = ({children}) => {

  return (
    <div className={styles.uploadCertificateImg}>
      <img className={styles.frameImg} src="/images/frame.png" />
        {children}
    </div>
  );
};
