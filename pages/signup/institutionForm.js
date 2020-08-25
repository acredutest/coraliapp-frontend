import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { sign_up } from "./../../slices/authSlice";
import { loadingStarted, loadingStopped } from "../../slices/statusSlice";

import styles from "./../../styles/SignIn.module.css";
import Link from "next/link";

const validations = yup.object().shape({
  institution_name: yup
    .string()
    .required("Información requerida")
    .min(3, "Debe tener más de 2 caracteres"),
  website: yup
    .string()
    .matches(
      /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Debe ser un website válido"
    )
    .required("Información requerida"),
  institution_email: yup
    .string()
    .email("Debe ser un email válido")
    .required("Información requerida"),
  password: yup.string().required("Información requerida"),
});

function InstitutionForm({ dispatch, router, setErrorMessage, errorMessage }) {
  return (
    <div>
      <Formik
        initialValues={{
          institution_name: "",
          website: "",
          institution_email: "",
          password: "",
        }}
        validationSchema={validations}
        onSubmit={async (values, { setStatus }) => {
          try {
            dispatch(loadingStarted());
            const { error, payload } = await dispatch(sign_up(values));
            if (error) {
              setErrorMessage(error.message);
            } else if (payload) {
              router.push(payload.role);
            }
            dispatch(loadingStopped());
          } catch (err) {
            console.error("Failed to signup ", err);
          }
        }}
      >
        {({ status }) => (
          <>
            <p className={`${styles.errorMessage} ${styles.error}`}>
              {errorMessage}
            </p>
            <Form>
              <div className={styles.fullField}>
                <label className={styles.label}>Nombre de la Institución</label>
                <Field
                  name="institution_name"
                  type="text"
                  placeholder="Codeable"
                  className={styles.field}
                />
                <ErrorMessage name="institution_name">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>Página web</label>
                <Field
                  name="website"
                  type="text"
                  placeholder="www.tuweb.com"
                  className={styles.field}
                />
                <ErrorMessage name="website">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>Email institucional</label>
                <Field
                  name="institution_email"
                  type="email"
                  placeholder="tu@correo.com"
                  className={styles.field}
                />
                <ErrorMessage name="institution_email">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>Contraseña</label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Tu contraseña"
                  className={styles.field}
                />
                <ErrorMessage name="password">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.buttonsContainer}>
                <button type="submit" className={styles.loginButton}>
                  Registrarme
                </button>
                <Link href="/signin">
                  <button className={styles.forgotPasswordButton}>
                    Ya tengo una cuenta
                  </button>
                </Link>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}

export default InstitutionForm;
