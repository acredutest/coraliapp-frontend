import React, { useState } from "react";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { signIn, sign_up } from "./../../slices/authSlice";
import { loadingStarted, loadingStopped } from "../../slices/statusSlice";

import styles from "./../../styles/SignIn.module.css";
import stylesSignUp from "./../../styles/SignUp.module.css";
import Link from "next/link";

const validationsPersona = yup.object().shape({
  name: yup
    .string()
    .required("Información requerida")
    .min(3, "Nombre debe tener más de 2 caracteres"),
  last_name: yup
    .string()
    .required("Información requerida")
    .min(2, "Apellido debe tener más de 1 caracteres"),
  email: yup.string().email().required("Información requerida"),
  password: yup.string().required("Información requerida"),
});

function SignUp() {
  const [currentPage, setCurrentPage] = useState("user");
  const [errorMessage, setErrorMessage] = useState("");
  const loading = useSelector((state) => state.status.loading);
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Crear cuenta</h1>
      <div className={stylesSignUp.currentContainer}>
        <button
          className={`${
            currentPage === "user"
              ? stylesSignUp.currentPage
              : stylesSignUp.noCurrentPage
          }`}
          onClick={() => setCurrentPage("user")}
        >
          Persona
        </button>
        <button
          className={`${
            currentPage === "institution"
              ? stylesSignUp.currentPage
              : stylesSignUp.noCurrentPage
          }`}
          onClick={() => setCurrentPage("institution")}
        >
          Institución
        </button>
      </div>
      {currentPage === "user" ? (
        <div>
          <Formik
            initialValues={{
              name: "",
              last_name: "",
              email: "",
              password: "",
            }}
            validationSchema={validationsPersona}
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
                console.error("Failed to signuo ", err);
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
                    <label className={styles.label}>Nombre</label>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Tu nombre"
                      className={styles.field}
                    />
                    <ErrorMessage name="name">
                      {(msg) => (
                        <div>
                          <p className={styles.error}>{msg}</p>
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className={styles.fullField}>
                    <label className={styles.label}>Apellido</label>
                    <Field
                      name="last_name"
                      type="text"
                      placeholder="Tu apellido"
                      className={styles.field}
                    />
                    <ErrorMessage name="last_name">
                      {(msg) => (
                        <div>
                          <p className={styles.error}>{msg}</p>
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className={styles.fullField}>
                    <label className={styles.label}>Email</label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="tu@correo.com"
                      className={styles.field}
                    />
                    <ErrorMessage name="email">
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
      ) : null}
      {currentPage === "institution" ? (
        <>
          <h1>institution</h1>
        </>
      ) : null}
    </div>
  );
}

export default SignUp;
