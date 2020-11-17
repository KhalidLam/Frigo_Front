import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { theme } from "@chakra-ui/core";

import "./App.css";

import Home from "./Components/Home";
import Liste from "./Components/Liste";
import Frigo from "./Components/Frigo";
import AllRecipes from "./Components/AllRecipes";
import SingleRecipe from "./Components/SingleRecipe";
import MesRecettes from "./Components/MesRecettes";
import Recettes from "./Components/Recettes";
import MesFavoris from "./Components/MesFavoris";
import Profile from "./Components/Profile";
import ProfileTest from "./Components/ProfileTest";

import Footer from "./Components/LayoutsComponents/Footer";
import ThemeContext from "./Components/LayoutsComponents/ThemeContext";

import FormLogin from "./Components/FormComponents/FormLogin";
import FormRegister from "./Components/FormComponents/FormRegister";
import AddNewRecipe from "./Components/FormComponents/AddNewRecipe";
import AddProductsToRecipe from "./Components/FormComponents/AddProductsToRecipe";

export const MissingContext = React.createContext();

// const customTheme = {
//   ...theme,
//   colors: {
//     ...theme.colors,
//     brand: {
//       900: "#1a365d",
//       800: "#153e75",
//       700: "#2a69ac",
//     },
//   },
// };

function App() {
  const [render, setRendering] = useState(false);
  const [MissProducts, setMissProducts] = useState([]);
  const contextValue = {
    render,
    setRendering,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <MissingContext.Provider value={{ MissProducts, setMissProducts }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/login" component={FormLogin} />
            <Route path="/register" component={FormRegister} />
            <Route path="/details" component={ProfileTest} />
            <Route path="/profile" component={Profile} />

            <Route exact path="/recipes" component={AllRecipes} />

            <Route exact path="/recipe:recipeId" component={SingleRecipe} />

            <Route exact path="/frigo" component={Frigo} />
            <Route exact path="/liste" component={Liste} />

            <Route path="/AddNewRecipe" component={AddNewRecipe} />
            <Route
              path="/AddProductsToRecipe"
              component={AddProductsToRecipe}
            />
            <Route path="/MesRecettes" component={MesRecettes} />
            <Route path="/favoris" component={MesFavoris} />

            <Route exact path="/Recettes" component={Recettes} />
          </Switch>
          <Footer />
        </Router>
      </MissingContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
