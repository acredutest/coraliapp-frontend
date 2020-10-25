import React from "react";

import styles from './../../styles/HeaderInstitution.module.css';
import { Flex, Button, Menu, MenuButton, MenuList, MenuItem, Avatar, Text } from "@chakra-ui/core";
import { useSelector } from "react-redux";

export const Header = props => {
  const user = useSelector(state => state.auth.user);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="#2E384D"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <img src="/images/logo-small.png" className={styles.logo} alt="Coraliapp" />
      </Flex>

      <Menu>
        <MenuButton as={Button} rightIcon="chevron-down" className={styles.menuButtonHeader}>
          <Avatar name={user.name} src={""} size="sm" />
          <Text fontSize="sm">{user.name}</Text>
        </MenuButton>
        <MenuList className={styles.menuListHeader}>
          <MenuItem className={styles.menuItemHeader}>Editar perfil</MenuItem>
          <MenuItem className={styles.menuItemHeader}>Pedir soporte</MenuItem>
          <MenuItem className={styles.menuItemHeader}>Salir</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};