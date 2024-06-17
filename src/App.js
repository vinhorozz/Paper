import React from "react";
import Routes from './routes'; //inserido 
import GlobalStyle from './GlobalStyle';//inserido
import NavBar from "./components/Navbar";//inserido
import { Footer } from "./style";

const App = () => {
  return (
 
   < >

      <GlobalStyle />
      <NavBar/>
      <Routes/>
      <Footer/>
  
    </>
  );
};

export default App;