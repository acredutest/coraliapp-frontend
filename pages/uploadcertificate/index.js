import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/UploadCertificate.module.css";
// import Certificate from "./certificate";

import ProtectedRoute from "./../../hocs/ProtectedRoute";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { logout } from "./../../slices/authSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { parse, isDate } from "date-fns";
import CertificatePdf from "./certificatepdf";
import { Page, Document, pdfjs } from "react-pdf";

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}

const validations = yup.object().shape({
  idcertificate: yup.number().required("ID de la credencial es requerida"),
  namecourse: yup.string().required("Nombre del curso es requerido"),
  nameinstitution: yup.string().required("Nombre de Institución es requerido"),
  description: yup.string().required("Ingresa una descripción"),
  issuedate: yup
    .date()
    .transform(parseDateString)
    .required("Fecha de emisión es requerida"),
  expirydate: yup.date().transform(parseDateString),
});
const UploadCertificate = () => {
  const path = {
    iconcloud: "/img/inputUpload.pdf",
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [file, setFile] = useState(path.iconcloud);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const router = useRouter();
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const onDocumentLoadSuccess = (numPage) => {
    setNumPages(numPage);
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          file: "",
          idcertificate: "",
          namecourse: "",
          nameinstitution: "",
          description: "",
          issuedate: "",
          expirydate: "",
        }}
        validationSchema={validations}
        onSubmit={(value) => {
          console.log(value);
          router.push("/webcertificate");
        }}
      >
        {(status) => (
          <>
            <p className={`${styles.errorMessage} ${styles.error}`}>
              {errorMessage}
            </p>
            <Form>
              <input
                id="input"
                type="file"
                onChange={onFileChange}
                className={styles.inputUpload}
              ></input>
              <label htmlFor="input" className={styles.label}>
                <Document
                  file={file}
                  onLoadSuccess={onDocumentLoadSuccess}
                  noData={<h4>Subir PDF</h4>}
                >
                  <Page pageNumber={pageNumber} width={300} />
                </Document>
              </label>

              <div className={styles.fullField}>
                <Field
                  name="idcertificate"
                  type="number"
                  placeholder="ID del certificado"
                  className={styles.field}
                />
                <ErrorMessage name="idcertificate">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <Field
                  name="namecourse"
                  type="text"
                  placeholder="Nombre del Curso o Evento"
                  className={styles.field}
                />
                <ErrorMessage name="namecourse">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <Field
                  name="nameinstitution"
                  type="text"
                  placeholder="Institución emisora del certificado"
                  className={styles.field}
                />
                <ErrorMessage name="nameinstitution">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <Field
                  name="description"
                  type="text"
                  placeholder="Descripción del Curso o Evento"
                  className={styles.field}
                />
                <ErrorMessage name="description">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>Fecha emisión</label>
                <Field name="issuedate" type="date" className={styles.field} />
                <ErrorMessage name="issuedate">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className={styles.fullField}>
                <label className={styles.label}>Fecha expiración</label>
                <Field
                  name="expirydate"
                  type="date"
                  placeholder="Fecha Expiración"
                  className={styles.field}
                />
                <ErrorMessage name="expirydate">
                  {(msg) => (
                    <div>
                      <p className={styles.error}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <button className={styles.forgotPasswordButton}>Cancelar</button>
              <button type="submit" className={styles.loginButton}>
                Agregar Certificado
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default UploadCertificate;
