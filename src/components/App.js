import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick(newClick) {
    newClick = setIsDarkMode
    newClick((isDarkMode)=> !isDarkMode)
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isOn = {isDarkMode} onDarkModeClick = {onDarkModeClick} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
