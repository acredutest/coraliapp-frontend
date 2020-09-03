import React, { useState } from "react";
import styles from "./../../styles/Verify.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useRouter } from "next/router";
import Head from "next/head";

import { loadingStarted, loadingStopped } from "../../slices/statusSlice";
import { useDispatch, useSelector } from "react-redux";

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
          .matches(/^[0-9]{8}$/, "DNI invalido")
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
          .matches(/^[0-9]{7}$/, "Debe ser un id válido")
          .required("ID es requerido"),
      }),
  },
  [["dni", "idCredential"]]
);

function Verify() {
  const path = {
    shieldImage: "/images/shield.svg",
  };

  const router = useRouter();

  return (
    <div className={styles.body}>
      <Head>
        <title>Coraliapp | Verify</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
          onSubmit={async ({ dni, idCredential }) => {
            if (idCredential.length > 1) {
              router.push(`./verificador/${idCredential}`);
            } else {
              router.push(`./verificador/user/${dni}`);
            }
          }}
        >
          {({ status }) => (
            <Form>
              <div className={styles.fullField}>
                <Field
                  className={styles.field}
                  placeholder="Documento de identidad"
                  name="dni"
                  type="text"
                />
                <ErrorMessage name="dni">
                  {(msg) => <p className={styles.error}>{msg}</p>}
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
                  {(msg) => <p className={styles.error}>{msg}</p>}
                </ErrorMessage>
              </div>
              <div className={styles.verifyButtonContainer}>
                <button type="submit" className={styles.verifyButton}>
                  Verificar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Verify;
