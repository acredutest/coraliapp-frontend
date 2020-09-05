import React, { useState } from "react";

import styles from "./../../../styles/HeaderUser.module.css";
import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Menu as MenuIcon, ChevronDown } from "heroicons-react";
import Link from "next/link";
import { signOut } from "../../../slices/authSlice";
import { useRouter } from "next/router";

export const HeaderUser = (props) => {
  const [loadingSignOut, setLoadingSignOut] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignOut = async () => {
    setLoadingSignOut(true);
    const { error, payload } = await dispatch(signOut());
    if (payload) {
      console.log("aaaaaaaaa");
      router.push("/signin");
    }
    setLoadingSignOut(false);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="transparent"
      {...props}
    >
      <Flex align="center" mr={5}>
        <img
          src="/images/logo-small.png"
          className={styles.logo}
          alt="Coraliapp"
        />
      </Flex>

      <Menu>
        <MenuButton as={Button} className={styles.menuButtonHeader}>
          <Avatar
            name={user.name}
            src={""}
            size="sm"
            className={styles.menuIconChevron}
          />
          <Text fontSize="sm" className={styles.menuIconChevron}>
            {user.name}
          </Text>
          <ChevronDown size={20} className={styles.menuIconChevron} />
          <MenuIcon className={styles.menuIconMenu} />
        </MenuButton>
        <MenuList className={styles.menuListHeader}>
          <MenuItem className={styles.menuItemHeader}>
            <Link href="/user/edit">Editar perfil</Link>
          </MenuItem>
          <MenuItem className={styles.menuItemHeader}>
            <Link href="/user">Pedir soporte</Link>
          </MenuItem>
          <MenuItem className={styles.menuItemHeader}>
            <Link href="/certificates/search">Buscar certificados</Link>
          </MenuItem>
          <MenuItem className={styles.menuItemHeader}>
            <Text onClick={handleSignOut}>Salir</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
