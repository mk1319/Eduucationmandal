import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from 'react-redux'
import Theme from "./Theme/Theme";
import { ThemeProvider } from "styled-components";
import store from './Reducx/store'




ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Provider store={store}> 
      <App/>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
