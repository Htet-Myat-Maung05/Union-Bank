import { IExtendedTheme } from "@/styles/Theme";
import { StyleSheet } from "react-native";

const getStyles = (theme: IExtendedTheme) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
        },
        line: {
            flex: 1,
            height: 1,
            backgroundColor: theme.colors.placeHolderTextColor,
        },
        text: {
            marginHorizontal: 8,
            color: theme.colors.placeHolderTextColor,
            fontSize: 14,
        },
    })

export default getStyles;