import React from "react";
import styles from "./../../styles/Verify.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function Verify() {
  const path = {
    shieldImage: "/images/shield.svg",
  };
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={path.shieldImage} alt="shield" />
        </div>
        <h2 className={styles.verifyTitle}>
          Verifica la validez del certificado
        </h2>
        <Formik>
          <Form>
            <Field
              className={styles.field}
              placeholder="Documento de identidad"
            />
            <div className={styles.separatorContainer}>
              <hr className={styles.separator} />
              <p className={styles.separatorText}>o</p>
              <hr className={styles.separator} />
            </div>
            <Field className={styles.field} placeholder="ID de la credencial" />
            <div className={styles.verifyButtonContainer}>
              <button type="submit" className={styles.verifyButton}>
                Verificar
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Verify;
