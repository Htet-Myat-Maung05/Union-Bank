import FONT_SIZE from "@/styles/FontSize";
import { IExtendedTheme } from "@/styles/Theme";
import { StyleSheet } from "react-native";

const getStyles = (theme: IExtendedTheme) =>
    StyleSheet.create({
        defaultStyle: {
            fontSize: FONT_SIZE.lg,
            color: theme.colors.dark,
        }
    })

export default getStyles;