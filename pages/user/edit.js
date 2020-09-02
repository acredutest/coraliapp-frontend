import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { loadingStarted, loadingStopped } from "../../slices/statusSlice";
import styles from "./../../styles/SignIn.module.css";
import Link from "next/link";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./../../hocs/ProtectedRoute";
import { updateUser } from "../../slices/authSlice";
import { useRouter } from "next/router";

import { patchFetch } from "../api/client";

const validations = yup.object().shape({
  name: yup
    .string()
    .required("Información requerida")
    .min(3, "Nombre debe tener más de 2 caracteres"),
  last_name: yup
    .string()
    .required("Información requerida")
    .min(2, "Apellido debe tener más de 1 caracter"),
  dni: yup.string().matches(/^[0-9]{8}$/, "DNI invalido"),
  linkedin: yup
    .string()
    .matches(
      /http(s)?:\/\/([w]{3}\.)?linkedin\.com\/in\/([a-zA-Z0-9-]{3,100})\//,
      "URL invalido"
    ),
  email: yup
    .string()
    .email("Debe ser un email válido")
    .required("Información requerida"),
  password: yup.string().min(3, "Contraseña debe tener más de 2 caracteres"),
});

const UserEdit = () => {
  const user = useSelector((state) => state.auth.user);
  const path = {
    profileImg: "/images/profile.svg",
    addImg: "/images/plus-circle.svg",
  };

  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  return (
    <div className={styles.container} style={{ paddingBottom: "20px" }}>
      <Head>
        <title>Coraliapp | Edit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1 className={styles.title} style={{ padding: "20px 0 10px" }}>
          Editar Perfil
        </h1>
        <Formik
          initialValues={{
            name: user.name,
            last_name: user.last_name,
            dni: user.dni ? user.dni : "",
            linkedin: user.linkedin ? user.linkedin : "",
            email: user.email,
            password: "",
          }}
          validationSchema={validations}
          onSubmit={async (values) => {
            try {
              dispatch(loadingStarted());
              const res = await patchFetch(`/users/${user.id}`, values);
              if (res.data) {
                dispatch(updateUser(values));
                router.push("/user");
              } else {
                setErrorMessage("No se pudo actualizar los datos");
              }
              dispatch(loadingStopped());
            } catch (err) {
              console.error("Failed to signup ", err);
            }
          }}
        >
          {({ status }) => (
            <Form>
              <div className={styles.logoContainer} style={{ width: "80px" }}>
                <img
                  src={user.image ? user.image : path.profileImg}
                  alt="profile"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid black",
                  }}
                />
                <button
                  style={{
                    position: "relative",
                    rigth: 0,
                    left: "54px",
                    bottom: "18px",
                  }}
                >
                  <img src={path.addImg} />
                </button>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>Nombre</label>
                <Field
                  className={styles.field}
                  placeholder="Nombre"
                  name="name"
                  type="text"
                />
                <ErrorMessage name="name">
                  {(msg) => <p className={styles.error}>{msg}</p>}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>Apellido</label>
                <Field
                  className={styles.field}
                  placeholder="Apellido"
                  name="last_name"
                  type="text"
                />
                <ErrorMessage name="last_name">
                  {(msg) => <p className={styles.error}>{msg}</p>}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>Documento de Identidad</label>
                <Field
                  className={styles.field}
                  placeholder="12345678"
                  name="dni"
                  type="text"
                />
                <ErrorMessage name="dni">
                  {(msg) => <p className={styles.error}>{msg}</p>}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>Cuenta Linkedin</label>
                <Field
                  className={styles.field}
                  placeholder="https://linkedin.com/tucuenta"
                  name="linkedin"
                  type="text"
                />
                <ErrorMessage name="linkedin">
                  {(msg) => <p className={styles.error}>{msg}</p>}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>Email</label>
                <Field
                  className={styles.field}
                  placeholder="Email"
                  name="email"
                  type="text"
                />
                <ErrorMessage name="email">
                  {(msg) => <p className={styles.error}>{msg}</p>}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>Contraseña</label>
                <Field
                  className={styles.field}
                  placeholder="*********"
                  name="password"
                  type="password"
                />
                <ErrorMessage name="password">
                  {(msg) => <p className={styles.error}>{msg}</p>}
                </ErrorMessage>
              </div>
              <div
                className={styles.buttonsContainer}
                style={{ marginTop: "15px" }}
              >
                <button type="submit" className={styles.loginButton}>
                  Actualizar
                </button>
                <Link href="/user">
                  <button className={styles.forgotPasswordButton}>
                    Cancelar
                  </button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ProtectedRoute(UserEdit);
