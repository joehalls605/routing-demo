import React, { createContext, useState, useEffect } from "react";

// Create a new context for navigation
const NavigationContext = createContext();

// NavigationProvider component
const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Handle user clicking forward and back to update the path
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    // Add a popstate event listener
    window.addEventListener("popstate", handlePopState);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Function to navigate to a new path
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
