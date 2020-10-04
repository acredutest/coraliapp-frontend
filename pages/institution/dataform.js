import React from "react";
import ProtectRoute from "../../hocs/ProtectedRoute";
import InstitutionLayout from "../../layouts/InstitutionLayout/InstitutionLayout";
import styles from "../../styles/Data.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { Button } from "@chakra-ui/core";
import Link from "next/link";

const validations = yup.object().shape({
  list_name: yup
    .string()
    .required("Información requerida")
    .min(5, "El nombre de la lista debe tener más de 4 caracteres"),
  list_visits_count: yup
    .number()
    .min(0, "El número debe ser mayor o igual a 0")
    .required("Información requerida"),
  web_views_count: yup
    .number()
    .min(0, "El número debe ser mayor o igual a 0")
    .required("Información requerida"),
  add_linkedin_count: yup
    .number()
    .min(0, "El número debe ser mayor o igual a 0")
    .required("Información requerida"),
  share_linkedin: yup
    .number()
    .min(0, "El número debe ser mayor o igual a 0")
    .required("Información requerida"),
});

function Label({ label, icon }) {
  return (
    <div className={styles.labelContainer}>
      <img src={icon} className={styles.icon} />
      <label className={styles.label}>{label}</label>
    </div>
  );
}

function FullField({ name, label, placeholder, icon }) {
  return (
    <div className={styles.fullfield}>
      <Label label={label} icon={icon} />
      <div className={styles.fieldContainer}>
        <Field name={name} placeholder={placeholder} className={styles.field} />
        <div>
          <ErrorMessage name={name}>
            {(msg) => <p className={styles.error}>{msg}</p>}
          </ErrorMessage>
        </div>
      </div>
    </div>
  );
}

function DataEntry() {
  const paths = {
    speedometer: "/images/speedometer.svg",
    megaphone: "/images/megaphone.svg",
    linkedin: "/images/linkedin-black.svg",
    share: "/images/share-black.svg",
  };

  return (
    <InstitutionLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>Analítica de indicadores</h1>
        <Formik
          initialValues={{
            list_name: "",
            list_visits_count: "",
            web_views_count: "",
            add_linkedin_count: "",
            share_linkedin: "",
          }}
          validationSchema={validations}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ status }) => (
            <Form>
              <div className={styles.analyticsContainer}>
                <div className={styles.fullfieldListName}>
                  <div className={styles.labelContainer}>
                    <label className={styles.labelListName}>
                      Nombre de la lista
                    </label>
                  </div>
                  <div className={styles.fieldContainer}>
                    <Field
                      name="list_name"
                      type="text"
                      placeholder="Executive Program  CEO 2020"
                      className={styles.field}
                    />
                    <ErrorMessage name="list_name">
                      {(msg) => <p className={styles.error}>{msg}</p>}
                    </ErrorMessage>
                  </div>
                </div>
                <FullField
                  name="list_visits_count"
                  label="Número de personas que han visitado la web de los certificados"
                  placeholder="100"
                  icon={paths.speedometer}
                />
                <FullField
                  name="web_views_count"
                  label="Personas que visitaron tu web despues de visitar el certificado"
                  placeholder="200"
                  icon={paths.megaphone}
                />
                <FullField
                  name="add_linkedin_count"
                  label="Número de estudiantes que agregaron el certificado en su perfil"
                  placeholder="20"
                  icon={paths.linkedin}
                />
                <FullField
                  name="share_linkedin"
                  label="Número de veces que el certificado fue compartido en Linkedin"
                  placeholder="40"
                  icon={paths.share}
                />
              </div>
              <div className={styles.buttonsContainer}>
                <div className={styles.buttonsAlignContainer}>
                  <Link href="/institution">
                    <Button
                      bg={"none"}
                      color={"green.200"}
                      _hover={{
                        color: "green.200",
                        transform: "scale(1.05)",
                      }}
                    >
                      Cancelar y salir
                    </Button>
                  </Link>
                  <Button
                    bg={"green.200"}
                    color={"white"}
                    _hover={{
                      bg: "green.200",
                      color: "white",
                      transform: "scale(1.05)",
                    }}
                    type="submit"
                  >
                    Actualizar
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </InstitutionLayout>
  );
}

export default ProtectRoute(DataEntry);
