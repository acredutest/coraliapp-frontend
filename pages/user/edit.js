import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import styles from "./../../styles/SignIn.module.css";
import Link from "next/link";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import ProtectedRoute from "./../../hocs/ProtectedRoute";
import { updateUser, addImage } from "../../slices/authSlice";
import { useRouter } from "next/router";
import { patchFetch, getFetch, patchImageFetch } from "../api/client";

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
  const [imageUser, setImageUser] = useState(path.profileImg);
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState("");
  const [featImage, setFeatImage] = useState("");

  useEffect(() => {
    const getImage = async () => {
      const res = await getFetch(`/users/${user.id}/image-profile`);
      if (res) {
        setImageUser(res.data.image_url);
        dispatch(addImage(imageUser));
      }
    };
    if (user) {
      getImage();
    }
  }, [user]);

  const hiddenImageInput = React.useRef(null);
  const handleClick = (event) => {
    event.preventDefault();
    hiddenImageInput.current.click();
  };
  const handleChange = (event) => {
    setFeatImage(event.target.files[0]);
    const image = event.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(image);

    reader.onloadend = function () {
      setImagePreview(reader.result);
    };
  };

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
              let res = "";
              let resImage = "";
              if (values) {
                res = await patchFetch(`/users/${user.id}`, values);
              }
              if (featImage) {
                const formData = new FormData();
                formData.append("image", featImage);
                resImage = await patchImageFetch(
                  `/users/${user.id}/image-profile`,
                  formData
                );
              }
              if (res.data && !resImage.data) {
                dispatch(updateUser(values));
                router.push("/user");
              } else if (
                !resImage.data ||
                !res.data ||
                (!res.data && !resImage.data)
              ) {
                setErrorMessage("No se pudo actualizar sus datos");
              } else {
                dispatch(updateUser(values));
                dispatch(addImage(resImage.data.image_url));
                router.push("/user");
              }
            } catch (err) {
              console.error("Failed to edit", err);
            }
          }}
        >
          {({ status }) => (
            <>
              <p
                className={`${styles.errorMessage} ${styles.error}`}
                style={{ marginBottom: "10px" }}
              >
                {errorMessage}
              </p>
              <Form>
                <div className={styles.logoContainer} style={{ width: "80px" }}>
                  <img
                    src={imagePreview ? imagePreview : imageUser}
                    alt="profile"
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      rigth: 0,
                      left: "54px",
                      bottom: "18px",
                    }}
                  >
                    <button onClick={handleClick}>
                      <img src={path.addImg} />
                    </button>
                    <input
                      type="file"
                      id="input"
                      onChange={handleChange}
                      style={{ display: "none" }}
                      ref={hiddenImageInput}
                    />
                  </div>
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
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ProtectedRoute(UserEdit);
