import React, { useState } from "react";

import PropTypes from 'prop-types';
import { Flex, Box, Text, Heading, Button } from "@chakra-ui/core";

import styles from './../../../styles/BreadcrumbInstitution.module.css';
import { ChevronLeft } from "heroicons-react";

const BreadcrumbInstitution = ({ title, handleBackButton }) => {
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      padding="1.5rem"
      bg="#EBFCFF"
    >
      {
        handleBackButton ?
          (
            <Button className={styles.backButton}>
              <ChevronLeft onClick={handleBackButton} />
            </Button>
          )
          :
          null
      }
      <Text fontSize="2xl" className={styles.title}>{title}</Text>
    </Flex>
  );
}

BreadcrumbInstitution.propTypes = {
  title: PropTypes.string.isRequired,
  handleBackButton: PropTypes.func
};

export { BreadcrumbInstitution };