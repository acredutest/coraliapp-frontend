import React from 'react';

import styles from './../../styles/Main.module.css';
import ProtectRoute from '../../hocs/ProtectedRoute';
import InstitutionLayout from '../../layouts/InstitutionLayout/InstitutionLayout';
import { BreadcrumbInstitution } from '../../components/common/BreadcrumInstitution';
import { ListCredentials } from '../../components/ListCredentials';
import { Box } from '@chakra-ui/core';

const Institution = () => {
  return (
    <InstitutionLayout>
      <BreadcrumbInstitution title={"Certificados Diseñados"} />
      <Box className={styles.container}>
        <ListCredentials handleAddButton={() => console.log('clicki')} />
      </Box>
    </InstitutionLayout>
  );
}

export default ProtectRoute(Institution);