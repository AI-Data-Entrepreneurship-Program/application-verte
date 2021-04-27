import React, { createContext, useState } from 'react';
import { colors } from '../consts/styles';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const lightTheme = { isLight: true, colors };
    const [theme, setTheme] = useState(lightTheme);

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
