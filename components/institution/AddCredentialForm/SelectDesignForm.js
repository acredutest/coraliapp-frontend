import React from 'react';

import { Box, Grid, Text, Flex, ButtonGroup, Button } from '@chakra-ui/core';
import { Formik, Form, Field } from 'formik';

import mainStyles from './../../../styles/Main.module.css';
import addCredentialstyles from './../../../styles/AddCredentialForm.module.css';
import styles from './../../../styles/SelectDesignForm.module.css';

const SelectDesignForm = ({ totalSteps, currentStep, nextStep }) => {

  const handleNextStep = () => {
    nextStep();
  }

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
                <Text fontSize="xl" color="#285FFF">Escoge un diseño de fondo</Text>
                <br />
              </Box>
              <Grid templateColumns="repeat(4, 1fr)" gap={10}>
                <Box className={styles.containerCredentialCheckbox}>
                  <label>
                    <Field type="radio" name="picked" value="One" className={styles.radioCredentialCheckbox} />
                    <img src="/images/certificado.jpg" className={styles.imageCredentialCheckbox} />
                  </label>
                </Box>
                <Box className={styles.containerCredentialCheckbox}>
                  <label>
                    <Field type="radio" name="picked" value="Two" className={styles.radioCredentialCheckbox} />
                    <img src="/images/certificado.jpg" className={styles.imageCredentialCheckbox} />
                  </label>
                </Box>
                <Box className={styles.containerCredentialCheckbox}>
                  <label>
                    <Field type="radio" name="picked" value="x" className={styles.radioCredentialCheckbox} />
                    <img src="/images/certificado.jpg" className={styles.imageCredentialCheckbox} />
                  </label>
                </Box>
                <Box className={styles.containerCredentialCheckbox}>
                  <label>
                    <Field type="radio" name="picked" value="Three" className={styles.radioCredentialCheckbox} />
                    <img src="/images/certificado.jpg" className={styles.imageCredentialCheckbox} />
                  </label>
                </Box>
                <Box className={styles.containerCredentialCheckbox}>
                  <label>
                    <Field type="radio" name="picked" value="Four" className={styles.radioCredentialCheckbox} />
                    <img src="/images/certificado.jpg" className={styles.imageCredentialCheckbox} />
                  </label>
                </Box>
                <Box className={styles.containerCredentialCheckbox}>
                  <label>
                    <Field type="radio" name="picked" value="Five" className={styles.radioCredentialCheckbox} />
                    <img src="/images/certificado.jpg" className={styles.imageCredentialCheckbox} />
                  </label>
                </Box>
              </Grid>
            </Box>
            <Flex justifyContent="flex-end">
              <div>Picked: {values.picked}</div>
              <ButtonGroup spacing={4}>
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

export default SelectDesignForm;