import { FC } from '@/types';
import { IThemeProvider, defaultTheme } from './types';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyle, themes } from '.';

const Provider: FC<IThemeProvider> = (props) => {
    const { theme = defaultTheme, children } = props;
    const activeTheme: DefaultTheme = themes[theme];

    return (
        <ThemeProvider theme={activeTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default Provider;
