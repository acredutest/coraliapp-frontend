import { Provider } from "react-redux";
import { CSSReset } from "@chakra-ui/core";

import store from "./../store";

import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
