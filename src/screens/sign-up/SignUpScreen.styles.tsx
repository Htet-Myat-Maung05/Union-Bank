import FONT_SIZE from "@/styles/FontSize";
import { IExtendedTheme } from "@/styles/Theme";
import { StyleSheet } from "react-native";

const getStyles = (theme: IExtendedTheme) =>
    StyleSheet.create({
        mainContainer: {
            gap: 12
        },
        label: {
            fontSize: FONT_SIZE.md,
            marginBottom: 5,
            paddingTop: 8,
            paddingBottom: 10,
            color: theme.colors.icon,
            textAlign: 'center'
        },
        SignInBtn: {
            backgroundColor: theme.colors.black,
            height: 45,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 16
        },
        SignInText: {
            color: theme.colors.background
        },
        socialBtnContainer: {
            gap: 12
        },
        BottmText: {
            textAlign: 'center',
            color: theme.colors.placeHolderTextColor
        },
        SignUpText: {
            fontWeight: 800,
            color: theme.colors.black,
            marginLeft: 5
        }
    })

export default getStyles;