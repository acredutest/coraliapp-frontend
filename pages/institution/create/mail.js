import React, { useEffect, useState } from 'react';

import mainStyles from './../../../styles/Main.module.css';
import styles from './../../../styles/CreateCertificateSuccess.module.css';
import { Formik, Form, Field } from 'formik';
import { Upload, InformationCircle, MailOutline, CheckCircle } from "heroicons-react";
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
// import { BreadcrumbInstitution } from '../../../components/common/BreadcrumInstitution';

const SuccessCreate = () => {

  return (
    <InstitutionLayout>
      <BreadcrumbInstitution title={"Certificados Diseñados"} />
      <Box className={styles.container}>
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
          <CheckCircle size={60} color="#4BC0D0" />
          <Box className={styles.containerText}>
            <Text color="#4BC0D0">Se envió con exito la lista de certificados , en 24 horas tus estudiantes tendran su certificado en su bandeja de correo</Text>
          </Box>
          <MailOutline size={60} />
          <Flex className={styles.containerText}>
            <Text color="grey">Recibiran el correo desde el email:</Text>
            <Text>envio@coralify.com</Text>
          </Flex>
          <Button variantColor="green">Ir al panel</Button>
        </Flex>
      </Box>
    </InstitutionLayout>

  );
}

export default SuccessCreate;