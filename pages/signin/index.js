import React, { useState } from "react";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { signIn } from "./../../slices/authSlice";
import { loadingStarted, loadingStopped } from "../../slices/statusSlice";

import styles from "./../../styles/SignIn.module.css";
import Link from "next/link";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("El formato del correo no es el correcto")
    .required("Información requerida"),
  password: yup.string().required("Información requerida"),
});

function SignIn(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.status.loading);
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ingresar</h1>
      {/* -{user ? user.email : "..."}- -
      {`${loading}`}- */}
      <Formik
        initialValues={{
          email: "nicolle@gmail.com",
          password: "nicolle1234",
        }}
        validationSchema={validations}
        onSubmit={async (values, { setStatus }) => {
          try {
            dispatch(loadingStarted());
            const { error, payload } = await dispatch(signIn(values));
            if (error) {
              if (error.message.startsWith("Invalid")) {
                setErrorMessage("Email o password son incorrectos");
              } else {
                setErrorMessage(error.message);
              }
            } else if (payload.data) {
              router.push(payload.data.role);
            }
            dispatch(loadingStopped());
          } catch (err) {
            console.error("Failed to login: ", err);
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
                  placeholder="*********"
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
              <button type="submit" className={styles.loginButton}>
                Ingresar
              </button>
              <button className={styles.forgotPasswordButton}>
                Olvidé mi contraseña
              </button>
            </Form>
          </>
        )}
      </Formik>
      <div className={styles.signUpLink}>
        <p className={styles.newAccountText}>¿Necesitas una cuenta?</p>
        <Link href="/signup">
          <span className={styles.signUp}>Registrate</span>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
