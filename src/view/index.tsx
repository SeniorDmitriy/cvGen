// Core
import React, { FC } from 'react';
import { defaultTheme, GlobalStyles } from '../assets';
import { AppRoutes } from './routes';
import styled, { ThemeProvider } from 'styled-components';

export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
`;

export const App: FC = () => (
    <ThemeProvider theme = { defaultTheme }>
        <GlobalStyles />
        <AppContainer>
            <AppRoutes />
        </AppContainer>
    </ThemeProvider>
);
