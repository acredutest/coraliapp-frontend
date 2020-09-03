import { Provider } from "react-redux";

import { theme, ThemeProvider } from '@chakra-ui/core';

import store from "./../store";
import "../styles/index.css";

const newTheme = {
  ...theme,
};  

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={newTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
