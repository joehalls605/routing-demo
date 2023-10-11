// Route.js
import { useContext } from 'react';
import NavigationContext from '../Context/Navigation';

const Route = ({ path, children }) => {
  const { currentPath } = useContext(NavigationContext);

  if (currentPath === path) {
    return children;
  } else {
    return null;
  }
};

export default Route;
