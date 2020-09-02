import React, { useEffect, useState } from 'react';

import mainStyles from './../../../styles/Main.module.css';
import styles from './../../../styles/CreateCertificateSuccess.module.css';
import { Formik, Form, Field } from 'formik';
import { Upload, InformationCircle, Mail, CheckCircle } from "heroicons-react";
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
  Textarea,
  Image
} from '@chakra-ui/core';
import InstitutionLayout from '../../../layouts/InstitutionLayout/InstitutionLayout';
import { BreadcrumbInstitution } from '../../../components/common/BreadcrumInstitution';

const SuccessCreate = () => {

  return (
    <InstitutionLayout>
      <BreadcrumbInstitution title={"Certificados Diseñados"} />
      <Box className={styles.container}>
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
          <CheckCircle size={60} color="#4BC0D0" />
          <Box className={styles.containerText}>
            <Text color="#4BC0D0">Tu lista de certificados fue creado con éxito</Text>
          </Box>
          <Image src="/images/certificate.png" />
          <Box className={styles.containerText}>
            <Text color="grey">Se genero la lista:</Text>
            <Text>Codeable Cohort 2</Text>
          </Box>
          <Flex minWidth={250} justifyContent="space-between">
            <Button variantColor="green" variant="outline">Editar lista</Button>
            <Button variantColor="green">Enviar lista</Button>
          </Flex>
        </Flex>
      </Box>
    </InstitutionLayout>

  );
}

export default SuccessCreate;