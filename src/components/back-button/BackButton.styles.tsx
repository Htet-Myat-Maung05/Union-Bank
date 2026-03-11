import { IExtendedTheme } from "@/styles/Theme";
import { StyleSheet } from "react-native";

const getStyles = (theme: IExtendedTheme) => StyleSheet.create({
    text: {
        color: theme.colors.black
    }
});

export default getStyles