// Importing useState and useEffect hooks from react
import { useState, useEffect } from "react";
// Importing MdOutlineDarkMode and BsFillBrightnessHighFill icons from react-icons
import { MdOutlineDarkMode } from "react-icons/md";
import { BsFillBrightnessHighFill } from "react-icons/bs";

// Header functional component
const DarkMode = () => {
  // Declaring isDarkMode state variable and its setter function
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Using useEffect hook to check for dark mode preference in local storage or system settings
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    }
  }, []);

  // handleToggle function to toggle dark mode on and off
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  };

  // Returning JSX elements
  return (
    <div className="flex justify-end">
      <button
        onClick={handleToggle}
        className="flex w-8 h-8 -mr-2 items-center justify-center hover:bg-gray-200 text-gray-800  dark:text-gray-300 dark:hover:bg-gray-600 font-bold rounded-full"
      >
        {isDarkMode ? (
          <BsFillBrightnessHighFill className="w-5 h-5" />
        ) : (
          <MdOutlineDarkMode className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

// Exporting Header component as default export
export default DarkMode;
