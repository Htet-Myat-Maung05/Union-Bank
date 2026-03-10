import React from "react";
import getStyles from "./OrDivider.styles";
import useCustomTheme from "@/hooks/useCustomTheme.hook";
import { Text, View } from "react-native";

const OrDivider: React.FC = () => {
    const theme = useCustomTheme();
    const styles = getStyles(theme);

    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>or</Text>
            <View style={styles.line} />
        </View>
    )
}

export default OrDivider;