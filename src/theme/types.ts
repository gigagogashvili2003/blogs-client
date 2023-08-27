export type IThemeMode = 'light' | 'dark';
export const defaultTheme: IThemeMode = 'dark';

export interface IThemeProvider {
    theme: IThemeMode;
}
