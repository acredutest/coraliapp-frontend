import React, { useState } from "react";

import PropTypes from 'prop-types';
import { Flex, Text, Button } from "@chakra-ui/core";
import { ChevronLeft } from "heroicons-react";

import styles from './../../styles/BreadcrumbInstitution.module.css';

export const Breadcrumb = ({ title, handleBackButton }) => {
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

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  handleBackButton: PropTypes.func
};
