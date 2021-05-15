import {ThemeProvider} from "@material-ui/styles";
import React from "react";
import {HashRouter} from "react-router-dom";
import AppTitleBar from "./components/AppTitleBar";
import RouterOutlet from "./RouterOutlet";
import { theme } from "./theme";

const App = () => {
  return (
    <div className="app">
      <AppTitleBar />
      <ThemeProvider theme={theme}>
        <HashRouter>
          <RouterOutlet />
        </HashRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
