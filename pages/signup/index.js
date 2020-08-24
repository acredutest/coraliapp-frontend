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
  name: yup.string().required().min(3, "Nombre debe tener más de 2 caracteres"),
  last_name: yup
    .string()
    .required()
    .min(2, "Apellido debe tener más de 1 caracteres"),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function SignUp() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Crear cuenta</h1>
    </div>
  );
}

export default SignUp;
