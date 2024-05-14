import React, { useContext } from 'react';
import { Button } from './ui/button';
import { SunIcon } from '@radix-ui/react-icons';
import { DarkModeContext } from './context/DarkModeContext';
import { IoMoonOutline } from "react-icons/io5";

export function ButtonIcon() {

    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    const currentIcon = isDarkMode ? <IoMoonOutline className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />;

    return (
        <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {currentIcon}
        </Button>
    );
}
