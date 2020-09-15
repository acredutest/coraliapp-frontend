import React, { useState } from "react";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

import styles from "./../styles/SignIn.module.css";
import stylesSignUp from "./../styles/SignUp.module.css";
import UserSignupForm from "./../components/institution/InstitutionSignupForm";
import InstitutionSignupForm from "./../components/user/UserSignupForm";
import { Flex, Button } from "@chakra-ui/core";

function SignUp() {
  const [currentPage, setCurrentPage] = useState("user");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" className={styles.container}>
        <Flex flexDirection="column" justifyContent="center" className={styles.cardForm}>
          <h1 className={styles.title}>Crear cuenta</h1>
          <br />
          <br />
          <div className={stylesSignUp.currentContainer}>
            <br />
            <Button
              variantColor="#4299e1"
              className={`${
                currentPage === "user"
                  ? stylesSignUp.currentPage
                  : stylesSignUp.noCurrentPage
                }`}
              onClick={() => setCurrentPage("user")}
            >
              Persona
        </Button>
            <Button
              variantColor="#4299e1"
              className={`${
                currentPage === "institution"
                  ? stylesSignUp.currentPage
                  : stylesSignUp.noCurrentPage
                }`}
              onClick={() => setCurrentPage("institution")}
            >
              Institución
        </Button>
          </div>
          {currentPage === "user" ? (
            <UserSignupForm
              dispatch={dispatch}
              router={router}
              setErrorMessage={setErrorMessage}
              errorMessage={errorMessage}
            />
          ) : null}
          {currentPage === "institution" ? (
            <InstitutionSignupForm
              dispatch={dispatch}
              router={router}
              setErrorMessage={setErrorMessage}
              errorMessage={errorMessage}
            />
          ) : null}
        </Flex>
      </Flex>
    </>
  );
}

export default SignUp;
