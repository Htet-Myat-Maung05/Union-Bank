import { IExtendedTheme } from "@/styles/Theme";
import { StyleSheet } from "react-native";

const getStyles = (theme: IExtendedTheme) =>
    StyleSheet.create({
        btn: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            height: 45,
            borderRadius: 15,
            borderWidth: 1,
            backgroundColor: theme.colors.gray
        },
        label: {
            fontSize: 14,
            color: theme.colors.black,
        },
    })
export default getStyles