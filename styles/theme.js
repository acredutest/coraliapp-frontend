import { theme } from "@chakra-ui/core";
const newTheme = {
  ...theme,
  colors: {
    //with variantColor and variant buttons
    // white: "#fff",
    // skyBlue: {
    //   500: "#4BC0D0",
    // },
    // blue: {
    //   500: "#4299E1",
    // },
    // gray: {
    //   100: "#6B7280",
    // },
    // pink: "#FF9082",
    // red: {
    //   500: "#E15463",
    // },
    // mediumBlue: {
    //   500: "#0852C2",
    // },
    // transparent: {
    //   500: "rgba(66, 153, 225, 0.08)",
    // },
    // violet: {
    //   500: "#9166EB",
    // },
    // navyBlue: {
    //   500: "#7498FF",
    // },
    // gray50: {
    //   500: "#69707F",
    // },
    // salmon: {
    //   500: "#F8746B",
    // },
    // royalBlue: {
    //   500: "#285FFF",
    // },
    // dimGray: {
    //   500: "#718096",
    // },
    // silver: {
    //   500: "#CBD5E0",
    // },
    // lightSkyBlue: {
    //   500: "#8DE0EB",
    // },
    // darkBlue: {
    //   500: "#2D3748",
    // },

    //without variantColor and variant buttons
    white: "#fff",
    green: {
      100: "#8DE0EB",
      200: "#4BC0D0",
    },
    blue: {
      300: "#7498FF",
      400: "#4299E1",
      500: "#285FFF",
      600: "#0852C2",
      900: "#2D3748",
    },
    gray: {
      100: "rgba(66, 153, 225, 0.08)",
      200: "#CBD5E0",
      300: "#718096",
      400: "#69707F",
    },
    red: {
      100: "#FF9082",
      200: "#F8746B",
      600: "#E15463",
    },
    violet: "#9166EB",
  },
};

export default newTheme;
