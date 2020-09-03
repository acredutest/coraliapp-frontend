import styles from "./../../../styles/Certificates.module.scss";

export default function FrameCertificate({
  state = null,
  imgSrc = null,
  message = null,
}) {
  const paths = {
    frame: "/images/frame.png",
    searchImg: "/images/search.svg",
    sadImg: "/images/sad.svg",
    cloudUpload: "/images/cloud-upload.svg",
    certificate: "/images/certificado.jpg",
    certificateImg: "/images/certificado.jpg",
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
        {state === "success" && (
          <img className={styles.certificateImg} src={paths.certificateImg} />
        )}
      </div>
      <p className={styles.uploadDescription}>{message}</p>
    </>
  );
}
