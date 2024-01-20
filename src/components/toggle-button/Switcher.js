import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "./ThemeContext";

export default function Switcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <DarkModeSwitch
        style={{ flex: 1 }}
        checked={theme === "dark"}
        onChange={toggleTheme}
        size={30}
      />
    </>
  );
}
