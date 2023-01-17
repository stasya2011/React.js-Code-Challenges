import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("re-render 2");
  }, [isDarkMode]);

  const addDarkMode = () => {
    setDarkMode(() => true);
  };

  const removeDarkMode = () => {
    setDarkMode(() => false);
  };
  return (
    <div className={`page ${isDarkMode ? "dark-mode" : ""}`}>
      <button onClick={addDarkMode} className="dark-mode-button">
        Dark Mode
      </button>
      <button onClick={removeDarkMode} className="light-mode-button">
        Light Mode
      </button>
    </div>
  );
};

export default DarkMode;
