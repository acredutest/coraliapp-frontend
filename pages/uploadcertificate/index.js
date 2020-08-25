import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/UploadCertificate.module.css";
// import Certificate from "./certificate";

import ProtectedRoute from "./../../hocs/ProtectedRoute";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { logout } from "./../../slices/authSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { parse, isDate } from "date-fns";

function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}

const validations = yup.object().shape({
  idcertificate: yup.number().required(),
  namecourse: yup.string().required(),
  nameinstitution: yup.string().required(),
  description: yup.string().required(),
  issuedate: yup.date().transform(parseDateString).required(),
  expirydate: yup.date().transform(parseDateString),
});
const UploadCertificate = () => {
  const [errorMessage, setErrorMessage] = useState("error inicial");
  const router = useRouter();
  return (
    <div>
      <Formik
        initialValues={{
          idcertificate: "",
          namecourse: "",
          nameinstitution: "",
          description: "",
          issuedate: "",
          expirydate: "",
        }}
        validationSchema={validations}
        onSubmit={() => router.push("/webcertificate")}
      >
        {({ status }) => (
          <>
            <p className={`${styles.errorMessage} ${styles.error}`}>
              {errorMessage}
            </p>
            <Form>
              <div className={styles.fullField}>
                <label className={styles.label}>ID del certificado</label>
                <Field
                  name="idcertificate"
                  type="number"
                  placeholder="ID del certificado"
                  className={styles.field}
                />
                <ErrorMessage name="idcertificate">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>
                  Nombre del Curso o Evento
                </label>
                <Field
                  name="namecourse"
                  type="text"
                  placeholder="Nombre del Curso o Evento"
                  className={styles.field}
                />
                <ErrorMessage name="namecourse">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>
                  Institución emisora del certificado
                </label>
                <Field
                  name="nameinstitution"
                  type="text"
                  placeholder="Institución emisora del certificado"
                  className={styles.field}
                />
                <ErrorMessage name="nameinstitution">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>
                  Descripción del Curso o Evento
                </label>
                <Field
                  name="description"
                  type="text"
                  placeholder="Descripción del Curso o Evento"
                  className={styles.field}
                />
                <ErrorMessage name="description">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>Fecha Emisión</label>
                <Field
                  name="issuedate"
                  type="date"
                  placeholder="Fecha Emisión"
                  className={styles.field}
                />
                <ErrorMessage name="issuedate">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>Fecha Expiración</label>
                <Field
                  name="expirydate"
                  type="date"
                  placeholder="Fecha Expiración"
                  className={styles.field}
                />
                <ErrorMessage name="expirydate">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <button type="submit" className={styles.loginButton}>
                Agregar Certificado
              </button>
              <button className={styles.forgotPasswordButton}>Cancelar</button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default UploadCertificate;
