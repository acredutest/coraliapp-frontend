import React from 'react';

import { Box } from '@chakra-ui/core';
import { useRouter } from 'next/router';

import ProtectRoute from '../../../hocs/ProtectedRoute';
import InstitutionLayout from '../../../layouts/InstitutionLayout/InstitutionLayout';
import { AddCredentialForm } from '../../../components/AddCredentialForm';

const Create = () => {
  const router = useRouter();

  return (
    <InstitutionLayout>
      <AddCredentialForm />
    </InstitutionLayout>
  );
}

export default (Create);
// export default ProtectRoute(Create);