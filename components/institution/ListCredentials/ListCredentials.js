import React from 'react';

import PropTypes from 'prop-types'
import { Button, Text, Grid, Box, Flex } from '@chakra-ui/core';
import { PlusOutline } from 'heroicons-react';

import styles from './../../../styles/ListCredentials.module.css';
import AddCredentialButton from './AddCredentialButton';

const AddButton = () => {

}

const ListCredentials = ({ handleAddButton }) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <AddCredentialButton handleAddButton={handleAddButton} />
    </Grid>
  )
}

ListCredentials.propTypes = {
  handleAddButton: PropTypes.func.isRequired,
}

export default ListCredentials;