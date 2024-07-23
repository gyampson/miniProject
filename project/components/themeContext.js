import React, { createContext, useState, useEffect, useContext } from "react";
import { Appearance } from "react-native"; // Import Appearance API
const ColorScheme = Appearance.getColorScheme();
const initialState = ColorScheme === "dark" ? "dark" : "light";
const themeContext = createContext({
  theme: initialState,
  setTheme: (newTheme) => {},
});

export default themeContext;
