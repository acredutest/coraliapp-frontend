import React, { useEffect, useState } from 'react';

import mainStyles from './../../styles/Main.module.css';
import addCredentialstyles from './../../styles/AddCredentialForm.module.css';
import styles from './../../styles/SendCertificateForm.module.css';
import { Formik, Form, Field } from 'formik';
import { Upload, InformationCircle, Mail } from "heroicons-react";
import {
  Box,
  Grid,
  Text,
  Flex,
  ButtonGroup,
  Button,
  Input,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  PopoverFooter,
  PopoverContent,
  Textarea
} from '@chakra-ui/core';

const SendCertificateForm = ({ totalSteps, currentStep, nextStep, previousStep }) => {

  const infoCSVRef = React.useRef();

  const handleNextStep = () => {
    nextStep();
  }

  const handlePreviousStep = () => {
    previousStep();
  }

  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };
  return (
    <Box className={styles.container}>
      <Formik
        initialValues={{
          picked: ""
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form className={mainStyles.container}>
            <Box className={addCredentialstyles.formContainer}>
              <Box>
                <Text fontSize="xl" color="#285FFF">Provee la información para el envio de los certificados</Text>
                <br />
              </Box>
              <Grid templateColumns="repeat(2, 1fr)" gap={10}>
                <Box className={styles.containerInputs}>
                  <Flex>
                    <Tooltip hasArrow label="Nombre de la lista. Ejm: Codeable Cohort 2" className={styles.inpuntTooltip}>
                      <Input placeholder="Nombre de la lista" className={styles.inputText} />
                    </Tooltip>
                  </Flex>

                  <Flex justifyContent="space-between" className={styles.containerRecipients}>
                    <Button variantColor="teal">
                      <Upload />Cargar lista de destinatarios
                    </Button>
                    <Popover initialFocusRef={infoCSVRef} placement="right" closeOnBlur={true}>
                      <PopoverTrigger>
                        <Button><InformationCircle /></Button>
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
                            <Button variantColor="green">Descargar plantilla</Button>
                          </ButtonGroup>
                        </PopoverFooter>
                      </PopoverContent>
                    </Popover>
                  </Flex>

                  <Flex>
                    <Tooltip hasArrow label="Asunto. Ejm: Certificado de Bootcamp Codeable" className={styles.inpuntTooltip}>
                      <Input placeholder="Certificado" className={styles.inputText} />
                    </Tooltip>
                  </Flex>
                  <Flex>
                    <Tooltip hasArrow label="Cuerpo del mensaje" className={styles.inpuntTooltip}>
                      <Textarea placeholder="Cuerpo del mensaje" className={styles.inputText} />
                    </Tooltip>
                  </Flex>
                </Box>
                <Box className={styles.containerLetter}>
                  <Flex>
                    <Flex>
                      <Flex>
                        <Mail/>
                      </Flex>
                      <Flex>
                        <Text>De: Usuario Admin</Text>
                        <Text>Para: [Lista de usuarios]</Text>
                        <Text></Text>
                      </Flex>
                    </Flex>
                    <Flex>
                      <Text>
                        Hola  [Nombre] ¡Felicitaciones! tu esfuerzo valio la pena, lograste finalizar el Bootcamp satisfactoriamente, accede a tu certificado en el siguiente enlace:
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Grid>
            </Box>
            <Flex justifyContent="flex-end">
              <ButtonGroup spacing={4}>
                <Button variantColor="teal" variant="ghost" onClick={handlePreviousStep}>
                  Volver
                </Button>
                <Button variantColor="teal" variant="solid" onClick={handleNextStep}>
                  Siguiente
                </Button>
              </ButtonGroup>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>

  );
}

export default SendCertificateForm;