import React, { useState } from 'react';

import Stepper from 'react-stepper-horizontal';

import styles from './../../styles/AddCredentialNav.module.css';
import { BreadcrumbInstitution } from './../common/BreadcrumInstitution';
import { Text, Box } from '@chakra-ui/core';
import { BookOpen } from 'heroicons-react';

const getSteps = (goToStep) =>
  ([
    {
      title: '<Text fontSize="xs" color={"#2E384D"}>Paso 1</Text>',
      icon: "/images/photograph.svg",
      onClick: () => goToStep(1)
    },
    {
      title: '<Text fontSize="xs" color={"#2E384D"}>Paso 2</Text>',
      icon: "/images/pencil-alt.svg",
      onClick: () => goToStep(3)
    },
    {
      title: '<Text fontSize="xs" color={"#2E384D"}>Paso 3</Text>',
      icon: "/images/user-add.svg",
      onClick: () => goToStep(3)
    },
  ]);

const AddCredentialNav = ({ totalSteps, currentStep, goToStep }) => {
  const [completedFirstStep, setCompletedFirstStep] = useState();
  const [completedSecondStep, setCompletedSecondStep] = useState();
  const [completedThirdStep, setCompletedThirdStep] = useState();

  const handleBackButton = () => {
    if (currentStep > 1) goToStep(currentStep - 1);
  }

  return (
    <>
      <BreadcrumbInstitution
        title={"Diseñe un nuevo certificado"}
        handleBackButton={currentStep > 1 ? handleBackButton : null}
      />
      <Box className={styles.stepperContainer}>
        <Stepper
          steps={getSteps(goToStep)}
          activeStep={currentStep - 1}
          size={30}
          circleTop={10}
          completeBarColor={"#5096ff"}
        />
      </Box>
    </>
  );
}

export default AddCredentialNav;