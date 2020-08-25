import React, { useState } from "react";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

import styles from "./../../styles/SignIn.module.css";
import stylesSignUp from "./../../styles/SignUp.module.css";
import UserForm from "./personForm";
import InstitutionForm from "./institutionForm";

function SignUp() {
  const [currentPage, setCurrentPage] = useState("user");
  const [errorMessage, setErrorMessage] = useState("");
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
        <UserForm
          dispatch={dispatch}
          router={router}
          setErrorMessage={setErrorMessage}
          errorMessage={errorMessage}
        />
      ) : null}
      {currentPage === "institution" ? (
        <InstitutionForm
          dispatch={dispatch}
          router={router}
          setErrorMessage={setErrorMessage}
          errorMessage={errorMessage}
        />
      ) : null}
    </div>
  );
}

export default SignUp;
