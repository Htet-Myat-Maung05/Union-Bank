import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
    Theme as NavigationTheme,
} from '@react-navigation/native';

export interface ExtendedColors {
    primary: string;
    background: string;
    card: string;
    text: string;
    icon: string;
    border: string;
    notification: string;

    secondary: string;
    white: string;
    black: string;
    error: string;
    gray: string;
    disableColor: string;

    headerText: string;
    labelText: string;
    textColor: string;
    primaryTextColor: string;
    secondaryTextColor: string;
    placeHolderTextColor: string;

    navyColor: string;
    textInputBackgroundColor: string;
    textInputLabelColor: string;
    textInputBorderColor: string;
    textInputFocusBorderColor1: string;
    textInputFocusBorderColor2: string;
    textInputFocusBorderShadowColor1: string;
    textInputFocusBorderShadowColor2: string;
    textInputDisableColor: string;

    iconBgColor: string;
    dark: string;
}

export interface IExtendedTheme extends NavigationTheme {
    colors: ExtendedColors;
}

export const CustomLightTheme: IExtendedTheme = {
    ...NavigationDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,

        primary: '#00953c',
        background: '#fafafa',
        card: '#f5f5f5',
        icon: '#30384a',
        text: '#1a1a1a',
        border: '#cccccc',
        notification: '#cc0000',

        secondary: '#333333',
        white: '#ffffff',
        black: '#000000',
        error: '#cc0000',
        gray: '#f0f1f5',
        disableColor: '#dddddd',

        headerText: '#ffffff',
        labelText: '#1a1a1a',
        textColor: '#1a1a1a',
        primaryTextColor: '#0a0a0a',
        secondaryTextColor: '#444444',
        placeHolderTextColor: '#999999',

        navyColor: '#000000',
        textInputBackgroundColor: '#ffffff',
        textInputLabelColor: '#1a1a1a',
        textInputBorderColor: '#cccccc',
        textInputFocusBorderColor1: '#00953c',
        textInputFocusBorderColor2: '#0549b8',
        textInputFocusBorderShadowColor1: '#e0e0e0',
        textInputFocusBorderShadowColor2: '#eeeeee',
        textInputDisableColor: '#f0f0f0',

        iconBgColor: '#eeeeee',
        dark: '#000000',
    },
};

export const CustomDarkTheme: IExtendedTheme = {
    ...NavigationDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,

        primary: '#00953c',
        background: '#0a0a0a',
        card: '#1a1a1a',
        icon: '#acb8cd',
        text: '#f0f0f0',
        border: '#333333',
        notification: '#ff4444',

        secondary: '#cccccc',
        white: '#0a0a0a',
        black: '#ffffff',
        error: '#ff6666',
        gray: '#262626',
        disableColor: '#444444',

        headerText: '#000000',
        labelText: '#e0e0e0',
        textColor: '#f0f0f0',
        primaryTextColor: '#ffffff',
        secondaryTextColor: '#bbbbbb',
        placeHolderTextColor: '#666666',

        navyColor: '#ffffff',
        textInputBackgroundColor: '#1a1a1a',
        textInputLabelColor: '#e0e0e0',
        textInputBorderColor: '#444444',
        textInputFocusBorderColor1: '#00953c',
        textInputFocusBorderColor2: '#0549b8',
        textInputFocusBorderShadowColor1: '#333333',
        textInputFocusBorderShadowColor2: '#2a2a2a',
        textInputDisableColor: '#222222',

        iconBgColor: '#222222',
        dark: '#ffffff',
    },
};