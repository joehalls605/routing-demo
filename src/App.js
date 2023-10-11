import React, { useState, useEffect } from 'react';
import { NavigationProvider } from './Context/Navigation';
import LandingPage from './Pages/LandingPage';
import DashboardPage from './Pages/DashboardPage';
import Route from './Components/Route';
import Link from './Components/Link';
import AccountPage from './Pages/AccountPage';
import BookingPage from './Pages/BookingPage';

const App = () => {
  const initialIsLoggedIn = window.location.pathname === '/dashboard';
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      window.history.pushState({}, '', '/dashboard');
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const handlePopState = () => {
      const currentPath = window.location.pathname;

      if (currentPath === '/') {
        setIsLoggedIn(false);
        window.history.pushState({}, '', '/');
      } else if (currentPath === '/dashboard') {
        setIsLoggedIn(true);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <NavigationProvider>
      <div>
        {isLoggedIn ? (
          <DashboardPage />
        ) : (
          <LandingPage setIsLoggedIn={setIsLoggedIn} />
        )}
        <div>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/booking">
            <BookingPage />
          </Route>
        </div>
      </div>
    </NavigationProvider>
  );
};

export default App;
