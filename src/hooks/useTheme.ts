// useTheme.js
import { useEffect, useState } from "react";

const useTheme = () => {
  const [themeColor, setThemeColor] = useState("#3B82F6"); // Default color (blue)

  // Load the theme color from local storage on component mount
  useEffect(() => {
    const storedColor = localStorage.getItem("themeColor");
    if (storedColor) {
      setThemeColor(storedColor);
    }
  }, []);

  // Function to handle theme color change
  const changeThemeColor = (color: string) => {
    setThemeColor(color);
    localStorage.setItem("themeColor", color); // Save color to local storage
  };

  return [themeColor, changeThemeColor] as const;
};

export default useTheme;
