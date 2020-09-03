import React from 'react';
import StepWizard from 'react-step-wizard';
import AddCredentialNav from './AddCredentialNav';
import SelectDesignForm from './SelectDesignForm';
import FillBodyForm from './FillBodyForm';
import SendCertificateForm from './SendCertificateForm';


const Some = (props) => {
  return (
    <p><button onClick={() => { props.goToStep(2) }}>Step 2</button></p>

  );
}


const AddCredentialForm = (props) => {
  return (
    <StepWizard
      nav={<AddCredentialNav />}
    >
      <SelectDesignForm />
      <FillBodyForm />
      <SendCertificateForm/>
    </StepWizard>
  );
}

export { AddCredentialForm };