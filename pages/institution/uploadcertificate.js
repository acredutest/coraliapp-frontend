import React, {useRef}from "react";
import ProtectRoute from "../../hocs/ProtectedRoute";
import InstitutionLayout from "../../layouts/InstitutionLayout/InstitutionLayout";
import styles from "../../styles/Upload.module.css"

import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from "yup";
import { parse, isDate } from "date-fns";

import { Upload, InformationCircle, Mail } from "heroicons-react";
import {
  Text,
  Flex,
  ButtonGroup,
  Button,
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  PopoverFooter,
  PopoverContent,
  Textarea
} from '@chakra-ui/core';

function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}

const validation = yup.object().shape({
  list_name: yup.string().min(4, "El nombre de la lista debe tener más de 3 caracteres").required("El nombre de la lista es requerida"),
  certificate_type: yup.string().min(5, "El tipo de certificado debe tener más de 4 caracteres").required("El tipo de certificado es requerida"),
  issue_at: yup
  .date()
  .transform(parseDateString)
  .required("Fecha de emisión es requerida"),
  name_institution: yup.string().min(5, "El nombre de la institución debe tener más de 4 caracteres").required("El nombre de la institución es requerida"),
  expiration_at: yup
  .date()
  .transform(parseDateString)
  .required("Fecha de finalización es requerida"),
  name_course: yup.string().min(5, "El nombre del curso debe tener más de 4 caracteres"),
  description: yup.string().min(5, "La descripción debe tener más de 4 caracteres"),
});

function FullFieldText({ label, name, placeholder}) {
  return(
    <div className={styles.fullfield}>
      <label className={styles.label}>{label}</label>
      <div className={styles.fieldContainer}>
        <Field
          name={name}
          type="text"
          placeholder={placeholder}
          className={styles.field}
        />
        <ErrorMessage name={name}>
          {(msg) => (
            <div>
              <p className={styles.error}>{msg}</p>
            </div>
          )}
        </ErrorMessage>
      </div>
    </div>
  )
}

function FieldDate({label, name}) {
  return(
  <div className={styles.fullfield}>
    <label className={styles.label}>{label}</label>
    <div className={styles.fieldContainer}>
      <Field name={name} type="date" className={styles.field} />
      <div>
        <ErrorMessage name={name}>
          {(msg) => <p className={styles.error}>{msg}</p>}
        </ErrorMessage>
      </div>
    </div>
  </div>
  )
}

function UploadField({label}) {
  const infoCSVRef = React.useRef();
  return(
    <div className={styles.fullfield}>
      <label className={styles.label}>{label}</label>
      <Flex justifyContent="space-between" className={styles.fieldContainer}>
        <Button variantColor={"teal"}>
          <Upload />Cargar lista de destinatarios
        </Button>
        <Popover initialFocusRef={infoCSVRef} placement="right" closeOnBlur={true}>
          <PopoverTrigger>
            <Button bg={"gray.100"}><InformationCircle /></Button>
          </PopoverTrigger>
          <PopoverContent zIndex={4}>
            <PopoverHeader pt={4} fontWeight="bold">¿Cómo seleccionar destinatarios?</PopoverHeader>
            <PopoverArrow />
            <PopoverBody>
              <Text fontSize="sm">
                Para seleccionar una lista de destinatarios, usted debe cargar un archivo csv con el formato "dni, email".
              </Text>
              <Text fontSize="sm">
                Aquí puede descargar una plantilla .csv de ejemplo
              </Text>
            </PopoverBody>
            <PopoverFooter d="flex" justifyContent="flex-end" pb={4}>
              <ButtonGroup size="sm">
                <Button variantColor={"teal"} >Descargar plantilla</Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </Flex> 
    </div>
  )
}

function FullTextArea({label, name, placeholder = ""}){
  return (
    <div className={styles.fullfield}>
      <label className={styles.label}>{label}</label>
      <div className={styles.fieldContainer}>
        <Textarea name={name} placeholder={placeholder} className={styles.field} />
        <div>
          <ErrorMessage name={name}>
            {(msg) => <p className={styles.error}>{msg}</p>}
          </ErrorMessage>
        </div>
      </div>
    </div>
  )
}

const UploadCertificate = () => {

  return(
    <InstitutionLayout>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>Upload certificate</h1>
          <div className={styles.formContainer}>
            <Formik
              initialValues={{
                list_name: "",
                certificate_type: "",
                issue_at: "",
                name_institution: "",
                expiration_at: "",
                name_course: "",
                description: "",
              }}
              validationSchema={validation}
              onSubmit={async (values) => {
                console.log(values);
              }}
            >
            {({ values }) => (
                <Form >
                  <div className={styles.formC}>
                    <div className={styles.form}>
                      <FullFieldText label="Nombre de la lista:" name="list_name" placeholder="Ejm: Codeable Cohort 2"/>
                      <FullFieldText label="Tipo de certificado:" name="certificate_type"  placeholder="Ejm: Constancia y Certificado"/>
                      <UploadField label="Para:" />
                      <FieldDate label="Inicio:" name="issue_at"/>
                      <FullFieldText label="Institución:" name="name_institution" placeholder="Ejm: Codeable"/>
                      <FieldDate label="Fin:" name="expiration_at"/>
                      <FullTextArea label="Nombre del curso:" name="name_course" placeholder="Ejm: Curso FullStack"/>
                      <FullTextArea label="Descripción:" name="description"/>
                    </div>
                  </div>
                  <div className={styles.buttonsC}>
                    <div className={styles.buttonsContainer}>
                      <Button variantColor={"teal"} variant="outline">Regresar al panel</Button>
                      <Button type="submit"  variantColor={"teal"} >Guardar y crear</Button>
                    </div>
                  </div>
                </Form>
            )}
            </Formik>
          </div>
        </div>
      </div>
      </InstitutionLayout>
  )
}

export default ProtectRoute(UploadCertificate);