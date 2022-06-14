import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Spanish from "./pages/Spanish";
import English from "./pages/English";
import SeeMoreEs from "./components/SeeMoreSp";
import SeeMoreEn from "./components/SeeMoreEn";

import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode="dark" />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/spanish" element={<Spanish />} />
          <Route path="/english" element={<English />} />
          <Route path="/SeeMoreEs" element={<SeeMoreEs />} />
          <Route path="/SeeMoreEn" element={<SeeMoreEn />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
