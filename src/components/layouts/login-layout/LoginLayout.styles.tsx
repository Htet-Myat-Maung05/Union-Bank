// LoginLayout.styles.ts
import { IExtendedTheme } from "@/styles/Theme";
import { StyleSheet } from "react-native";

const getStyles = (theme: IExtendedTheme) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: theme.colors.background,
        position: 'relative',
    },

    aboutBtnStyle: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
        width: 25,
        height: 25,
        borderRadius: 22,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },

    themeBtnStyle: {
        position: 'absolute',
        top: 10,
        right: 40,
        zIndex: 10,
        width: 25,
        height: 25,
        borderRadius: 22,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoContainer: {
        flex: 0.7,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 40
    },

    logoTextAccent: {
        fontSize: 36,
        fontWeight: '800',
        letterSpacing: 2,
        color: theme.colors.primaryTextColor,
    },

    logoText: {
        fontSize: 36,
        fontWeight: '800',
        letterSpacing: 2,
        color: theme.colors.primary,
    },
    desText: {
        color: theme.colors.primaryTextColor
    },

    contentContainer: {
        flex: 1.3,
        alignItems: 'stretch',
        paddingHorizontal: 20,
    },

});

export default getStyles;