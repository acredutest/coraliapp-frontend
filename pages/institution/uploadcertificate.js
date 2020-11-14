import React, {useState, useRef}from "react";
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

function FullFieldText({ label, name, placeholder, classN}) {
  return(
    <div className={`${styles.fullfield} ${classN}`}>
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

function FieldDate({label, name, classN}) {
  return(
  <div className={`${styles.fullfield} ${classN}`}>
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

function UploadField({label, handleClick, handleChange, hiddenCSVInput, csvName, classN}) {
  const infoCSVRef = useRef();
  return(
    <div className={`${styles.fullfield} ${classN}`}>
      <label className={styles.label}>{label}</label>
      <div justifyContent="space-between" className={styles.fieldContainer}>
        <div className={styles.addresseeButton}>
          {csvName != undefined ? 
            <Button variantColor={"teal"} onClick={handleClick}>
              {csvName}
            </Button>
           :
            <Button variantColor={"teal"} onClick={handleClick}>
              <Upload />Cargar lista de destinatarios
            </Button>
          }
          <input
            id="input"
            type="file"
            className={styles.inputFileHidden}
            onChange={handleChange}
            ref={hiddenCSVInput}
            accept=".csv"
          ></input>
        </div>
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
      </div> 
    </div>
  )
}

function FullTextArea({label, name, placeholder = "", classN, value, handleInput}){
  return (
    <div className={`${styles.fullfield} ${classN}`}>
      <label className={styles.label}>{label}</label>
      <div className={styles.fieldContainer}>
        <Textarea name={name} placeholder={placeholder} className={styles.field} value={value} onChange={handleInput}/>
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
  const [file, setFile] = useState();
  const [featCSV, setFeatCSV] = useState("");
  const [featImages, setFeatImages] = useState();
  const [images, setImages] = useState();
  const [courseNameChangeValue, setCourseNameChangeValue] = useState("");
  const [descriptionChangeValue, setDescriptionChangeValue] = useState("");

  // const onFileChange = (e) => {
  //   setFile(e.target.files[0]);
  //   console.log(file)
  // };

  const hiddenCSVInput = useRef(null);
  const hiddenImagesInput = useRef(null);

  const handleCSVClick = (event) => {
    event.preventDefault();
    hiddenCSVInput.current.click();
  };
  const handleCSVChange = (event) => {
    setFeatCSV(event.target.files[0]);
  };

  const handleImagesClick = (event) => {
    event.preventDefault();
    hiddenImagesInput.current.click();
  };
  const handleImagesChange = (event) => {
    setFeatImages(event.target.files);
    setImages(Array.from(event.target.files));
  };

  const handleCourseNameChange = (event) => {
    setCourseNameChangeValue(event.target.value);
  }
  const handleDescriptionChange = (event) => {
    setDescriptionChangeValue(event.target.value);
  }

  console.log(featCSV);
  console.log(featImages);
  
  
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
              onSubmit={async ({list_name, certificate_type, issue_at, name_institution, expiration_at, name_course, description }) => {
                name_course = courseNameChangeValue;
                description = descriptionChangeValue
                console.log(list_name);
                console.log(certificate_type);
                console.log(issue_at);
                console.log(name_institution);
                console.log(expiration_at);
                console.log(name_course);
                console.log(description);
              }}
            >
            {({ values }) => (
                <Form >
                  <div className={styles.formC}>
                    <div className={styles.form}>
                      <FullFieldText label="Nombre de la lista:" name="list_name" placeholder="Ejm: Codeable Cohort 2" classN = {styles.nameList}/>
                      <FullFieldText label="Tipo de certificado:" name="certificate_type"  placeholder="Ejm: Constancia y Certificado" classN = {styles.typeCertificate}/>
                      <UploadField label="Para:"  handleClick={handleCSVClick} handleChange={handleCSVChange} hiddenCSVInput={hiddenCSVInput} csvName={featCSV.name} classN={styles.forButton}/>
                      <FieldDate label="Inicio:" name="issue_at" classN={styles.start}/>
                      <FullFieldText label="Institución:" name="name_institution" placeholder="Ejm: Codeable" classN = {styles.institutionName}/>
                      <FieldDate label="Fin:" name="expiration_at" classN={styles.final}/>
                      <FullTextArea label="Nombre del curso:" name="name_course" placeholder="Ejm: Curso FullStack" classN={styles.courseName} value={courseNameChangeValue}  handleInput={handleCourseNameChange}/>
                      <FullTextArea label="Descripción:" name="description" classN={styles.description}  value={descriptionChangeValue}  handleInput={handleDescriptionChange}/>
                      <div className={styles.uploadFiles}>
                        <div className={styles.fullfield}>
                          <label className={styles.label}>Lista de imagenes:</label>
                          <div>
                            <Button variantColor={"teal"} onClick={handleImagesClick}> <Upload />Cargar lista de imagenes</Button>
                            <input
                              id="inputUploadImage"
                              type="file"
                              onChange={handleImagesChange}
                              className={styles.inputFileHidden}
                              ref={hiddenImagesInput}
                              accept="image/*"
                              multiple
                            ></input>
                          </div>
                        </div>
                        <div className={styles.lisOfFiles}>
                          {images != undefined ? (
                            images.map((image, index) => (<p key={index} className={styles.nameOfImage}>{image.name}</p>))) 
                          : 
                          <p className={styles.nameOfImage}>No Images</p>
                           }
                        </div>
                      </div>
                      
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