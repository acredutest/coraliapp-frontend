import React from 'react';

import PropTypes from 'prop-types'
import { Button, Text, Box, Flex } from '@chakra-ui/core';
import { PlusOutline } from 'heroicons-react';

import mainStyles from './../../../styles/Main.module.css';
import styles from './../../../styles/ListCredentials.module.css';

const AddCredentialButton = ({ handleAddButton }) => {
  return (
    <Box className={styles.addCredentialContainer}>
      <Button onClick={handleAddButton} className={styles.addCredentialButton}>
        <PlusOutline size={70} color={'#2E384D'} />
      </Button>
      <Flex className={mainStyles.container}>
        <Text fontSize="sm" textAlign="center">Agregar nueva lista de certificados</Text>
      </Flex>
    </Box>
  )
}

AddCredentialButton.propTypes = {
  handleAddButton: PropTypes.func.isRequired,
}

export default AddCredentialButton;