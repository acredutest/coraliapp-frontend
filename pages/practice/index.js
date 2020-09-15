import { Button, Spinner, PseudoBox } from "@chakra-ui/core";

import styles from "./../../styles/SignIn.module.css";
import { useSelector } from "react-redux";
import React, { useState } from "react";

function Practice() {
  const loading = useSelector((state) => state.status.loading);
  const [currentPage, setCurrentPage] = useState("user");

  return (
    <>
      {/*variantColor always take nameColor.500 as default*/}

      {/* with variantColor, variant and button */}
      {/* 
      <div>
        <Button
          type="submit"
          variantColor="skyBlue"
          variant="solid"
          size="sm"
          style={{ boxShadow: "none !important" }}
        >
           
          sign in
        </Button>
        <Button
          variantColor="skyBlue"
          variant="ghost"
          size="sm"
          style={{ boxShadow: "none !important" }}
        >
          forgot
        </Button>
      </div> 
      */}
      <div>
        <Button
          type="submit"
          variantColor="blue"
          variant={currentPage === "institution" ? "ghost" : "solid"}
          onClick={() => setCurrentPage("user")}
        >
          {/*simple spinner */}
          <Spinner size="sm" />
        </Button>
        <Button
          variantColor="blue"
          variant={currentPage === "user" ? "ghost" : "solid"}
          onClick={() => setCurrentPage("institution")}
        >
          institucion
        </Button>
      </div>

      {/* without variantColor and variant but with button*/}
      <div>
        <Button
          type="submit"
          bg={currentPage === "user" ? "blue.900" : "white"}
          size="sm"
          style={{ boxShadow: "none !important" }}
          onClick={() => setCurrentPage("user")}
        >
          {/* custom spinner */}
          <Spinner
            color={currentPage === "user" ? "white" : "blue.100"}
            size="sm"
            speed="0.65s"
            emptyColor="transparent"
          />
        </Button>
      </div>
      <div>
        <Button
          type="submit"
          bg={currentPage === "user" ? "gray.200" : "white"}
          size="sm"
          style={{ boxShadow: "none !important" }}
          color={currentPage === "user" ? "white" : "blue.100"}
          onClick={() => setCurrentPage("user")}
        >
          enter
        </Button>
        <Button
          bg={currentPage === "institution" ? "blue.500" : "white"}
          color={currentPage === "institution" ? "white" : "blue.500"}
          size="sm"
          style={{ boxShadow: "none !important" }}
          onClick={() => setCurrentPage("institution")}
        >
          forgot
        </Button>
      </div>

      {/* without variantColor and variant but with PseudoBox*/}
      <div>
        <PseudoBox
          as="button"
          bg={currentPage === "user" ? "blue.600" : "white"}
          py={2}
          px={4}
          rounded="md"
          fontWeight="semibold"
          color={currentPage === "user" ? "white" : "blue.600"}
          onClick={() => setCurrentPage("user")}
          _focus={{ outline: "transparent" }}
        >
          sign in
        </PseudoBox>
        <PseudoBox
          as="button"
          color="blue.400"
          py={2}
          px={4}
          ml={3}
          rounded="md"
          fontWeight="semibold"
        >
          sign in other
        </PseudoBox>
        <PseudoBox
          as="button"
          color="blue.400"
          py={2}
          px={4}
          ml={3}
          rounded="lg"
          fontWeight="semibold"
          _hover={{ bg: "blue.400", color: " white" }}
          _focus={{ boxShadow: "outline" }}
        >
          Hover me
        </PseudoBox>
      </div>
    </>
  );
}

export default Practice;
