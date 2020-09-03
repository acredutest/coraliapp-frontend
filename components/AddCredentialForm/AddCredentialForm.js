import React from 'react';
import StepWizard from 'react-step-wizard';
import AddCredentialNav from './AddCredentialNav';
import SelectDesignForm from './SelectDesignForm';
import FillBodyForm from './FillBodyForm';


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
      <Some />
      <p>Holi 3</p>
    </StepWizard>
  );
}

export { AddCredentialForm };