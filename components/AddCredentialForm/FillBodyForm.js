import React, { useEffect, useState } from 'react';

import mainStyles from './../../styles/Main.module.css';
import addCredentialstyles from './../../styles/AddCredentialForm.module.css';
import styles from './../../styles/FillBodyForm.module.css';
import { Box, Grid, Text, Flex, ButtonGroup, Button, Input } from '@chakra-ui/core';
import { Formik, Form, Field } from 'formik';

const FillBodyForm = ({ totalSteps, currentStep, nextStep, previousStep }) => {

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
                <Text fontSize="xl" color="#285FFF">Edita el contenido del certificado</Text>
                <br />
              </Box>
              <Grid templateColumns="repeat(2, 1fr)" gap={10}>
                <Box className={styles.containerInputs}>
                  <Input placeholder="CERTIFICATE OF ACHIEVEMENT" className={styles.inputText} />
                  <Input placeholder="This document certifies that" className={styles.inputText} />
                  <Input placeholder="Has successfully achieved thecertification" className={styles.inputText} />
                  <Grid templateColumns="70% 24%" gap={5} className={styles.containerSignature}>
                    <Box>
                      <Text fontSize="sm">Agregar firma 1</Text>
                      <Text fontSize="xs">Imagen en formato png, resolución mínima de 100x100px y tamaño máximo de 10Mb</Text>
                    </Box>
                    <Box>
                      <Input type="file" />
                    </Box>
                  </Grid>
                  <Grid templateColumns="70% 24%" gap={5} className={styles.containerSignature}>
                    <Box>
                      <Text fontSize="sm">Agregar firma 2</Text>
                      <Text fontSize="xs">Imagen en formato png, resolución mínima de 100x100px y tamaño máximo de 10Mb</Text>
                    </Box>
                    <Box>
                      <Input type="file" />
                    </Box>
                  </Grid>
                </Box>
                <Box className={styles.containerCredential}>
                  <img src="/images/certificado.jpg" className={styles.imageCredential} />
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

export default FillBodyForm;