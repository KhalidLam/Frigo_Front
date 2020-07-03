
import React, { useState, useContext } from "react";
import {  BrowserRouter as Router,  Switch,  Route,  Link,  Redirect} from "react-router-dom";
import './App.css';
import FormLogin from './Components/FormLogin';
import FormRegister from './Components/FormRegister';
import Home from './Components/Home'
import ThemeContext from "./Components/ThemeContext";
import Recipe from "./Components/Recipe";
import AddCategory from "./Components/AddCategory";

import {
  ThemeProvider,
  theme,
  CSSReset,
  usePopoverContext,
} from "@chakra-ui/core";
// import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};
function App() {


    const [conect, setConect] = useState("");

    const contextValue = {
      conect,
      updateConect: setConect
    };
   return (

    // <ThemeProvider >
    // <CSSReset />
  <ThemeContext.Provider value={contextValue}> 
   <Router>
     <Switch>
       <Route exact path="/" component={Home} />

       <Route exact path="/login" component={FormLogin} />

       <Route path='/register' component={FormRegister} />

       <Route exact path="/recipes" component={Recipe} />
       <Route path='/addcat' component={AddCategory} />

     </Switch>
   </Router>

  </ThemeContext.Provider> 
// </ThemeProvider>
  );
}

export default App;
