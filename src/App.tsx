import { useState } from "react";
import { Global } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import { globalStyle } from "./styles/global";
import { SliderPage } from "./page";

export const App: React.FC = () => {
  return (
    <>
      <Global styles={[globalStyle]} />
      <Routes>
        <Route path="/" element={<SliderPage />} />
      </Routes>
    </>
  );
};

export default App;
