import React from 'react';

import { useRouter } from 'next/router';

import InstitutionLayout from '../../../layouts/InstitutionLayout/InstitutionLayout';
import AddCredentialContainer from './../../../components/institution/AddCredentialForm/AddCredentialContainer';

const Create = () => {
  const router = useRouter();

  return (
    <InstitutionLayout>
      <AddCredentialContainer />
    </InstitutionLayout>
  );
}

export default (Create);
// export default ProtectRoute(Create);