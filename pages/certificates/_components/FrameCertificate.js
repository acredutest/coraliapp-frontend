import styles from "./../../../styles/Certificates.module.scss";

export const FrameCertificate = ({
  state = null,
  imgSrc = null,
  message = null,
}) => {
  const paths = {
    frame: "/images/frame.png",
    searchImg: "/images/search.svg",
    sadImg: "/images/sad.svg",
    cloudUpload: "/images/cloud-upload.svg",
  };
  return (
    <>
      <div className={styles.uploadCertificateImg}>
        <img className={styles.frameImg} src={paths.frame} />
        {state === "onSearch" && (
          <img className={styles.frameIconImg} src={paths.searchImg} />
        )}
        {state === "notFound" && (
          <img className={styles.frameIconImg} src={paths.sadImg} />
        )}
      </div>
      <p className={styles.uploadDescription}>{message}</p>
    </>
  );
};
