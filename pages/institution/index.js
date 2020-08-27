import React from 'react';
import ProtectRoute from '../../hocs/ProtectedRoute';
import InstitutionLayout from '../../layouts/InstitutionLayout/InstitutionLayout';
import { BreadcrumbInstitution } from '../../components/common/BreadcrumInstitution';

const Institution = () => {
  return (
    <InstitutionLayout>
      <BreadcrumbInstitution title={"Certificados Diseñados"}/>
    </InstitutionLayout>
  );
}

export default ProtectRoute(Institution);