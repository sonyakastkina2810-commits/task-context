import React, { createContext, useContext } from 'react';

export type Theme = 'light' | 'dark';

interface IThemeProviderProps {
    theme: Theme;
    children?: React.ReactNode;
}

const ThemeContext = createContext<Theme>('light');

export function ThemeProvider({ theme, children }: IThemeProviderProps) {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(ThemeContext);
}