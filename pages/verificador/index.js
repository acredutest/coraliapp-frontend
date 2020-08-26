import React from "react";
import styles from "./../../styles/Verify.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const validations = yup.object().shape(
  {
    dni: yup
      .string()
      .test("notBothAtTheSameTime", "", function (dni) {
        const { idCredential } = this.parent;
        if (idCredential && dni) {
          return false;
        }
        return true;
      })
      .when(["idCredential"], {
        is: (idCredential) => !idCredential,
        then: yup
          .string()
          .matches(/^[1-9]{8}$/, "DNI invalido")
          .required("DNI es requerido"),
      }),
    idCredential: yup
      .string()
      .test(
        "notBothAtTheSameTime",
        "No se puede poner dni y el id al mismo tiempo",
        function (idCredential) {
          const { dni } = this.parent;
          if (dni && idCredential) {
            return false;
          }
          return true;
        }
      )
      .when(["dni"], {
        is: (dni) => !dni,
        then: yup
          .string()
          .min(1, "Debe ser una id válido")
          .required("ID es requerido"),
      }),
  },
  [["dni", "idCredential"]]
);

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
        <Formik
          initialValues={{
            dni: "",
            idCredential: "",
          }}
          validationSchema={validations}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <div className={styles.fullField}>
              <Field
                className={styles.field}
                placeholder="Documento de identidad"
                name="dni"
                type="text"
              />
              <ErrorMessage name="dni">
                {(msg) => (
                  <div>
                    <p className={styles.error}>{msg}</p>
                  </div>
                )}
              </ErrorMessage>
            </div>
            <div className={styles.separatorContainer}>
              <hr className={styles.separator} />
              <p className={styles.separatorText}>o</p>
              <hr className={styles.separator} />
            </div>
            <div className={styles.fullField}>
              <Field
                className={styles.field}
                placeholder="ID de la credencial"
                name="idCredential"
                type="text"
              />
              <ErrorMessage name="idCredential">
                {(msg) => (
                  <div>
                    <p className={styles.error}>{msg}</p>
                  </div>
                )}
              </ErrorMessage>
            </div>
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
