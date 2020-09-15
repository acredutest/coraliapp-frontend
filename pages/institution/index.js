import React from 'react';

import { Box } from '@chakra-ui/core';
import { useRouter } from 'next/router';

import styles from './../../styles/Main.module.css';
import ProtectRoute from '../../hocs/ProtectedRoute';
import InstitutionLayout from '../../layouts/InstitutionLayout/InstitutionLayout';
import Breadcrumb from '../../components/institution/Breadcrumb';
import ListCredentials from './../../components/institution/ListCredentials/ListCredentials';

const Institution = () => {
  const router = useRouter();

  const handleAddButton = (e) => {
    e.preventDefault()
    router.push('/institution/create')
  }

  return (
    <InstitutionLayout>
      <Breadcrumb title={"Certificados Diseñados"} />
      <Box className={styles.container}>
        <ListCredentials handleAddButton={handleAddButton} />
      </Box>
    </InstitutionLayout>
  );
}

export default ProtectRoute(Institution);