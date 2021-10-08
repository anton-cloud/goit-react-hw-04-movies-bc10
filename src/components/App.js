import React from "react";
import Header from "./header/Header";
import { BrowserRouter } from 'react-router-dom';
import Main from "./main/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
