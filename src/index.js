import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./themes";
import { store } from "./store";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
