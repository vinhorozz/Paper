import React from "react";
import Routes from './routes'; //inserido 
import GlobalStyle from './GlobalStyle';//inserido
import NavBar from "./components/Navbar";//inserido

const App = () => {
  return (
 
   < >

      <GlobalStyle />
      <NavBar/>
      <Routes/>
  
    </>
  );
};

export default App;