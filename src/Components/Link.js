import React from "react";
import classNames from "classNames"; // Updated import

import useNavigation from '../Hooks/useNavigation';

const Link = ({ to, children, className }) => {
    const { navigate } = useNavigation();

    const classes = classNames('text-blue-500 mx-3', className);

    const handleClick = (event) => {
        event.preventDefault();
        navigate(to);
    }

    return <a className={classes} onClick={handleClick}>{children}</a>;
};

export default Link;
