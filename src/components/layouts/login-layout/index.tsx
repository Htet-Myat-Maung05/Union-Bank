// LoginLayout.tsx
import useCustomTheme from "@/hooks/useCustomTheme.hook"
import { ReactNode } from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, Text, View } from "react-native";
import getStyles from "./LoginLayout.styles";
import ThemeToggleButton from "@/components/theme-button";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StackActions, useNavigation } from "@react-navigation/native";
import { ABOUT_SCREEN } from "@/constants/Route.constants";

type TProps = {
    children: ReactNode
}

export default function LoginLayout({ children }: TProps) {
    const theme = useCustomTheme();
    const styles = getStyles(theme);
    const navigation = useNavigation();

    const OnAboutPress = () => navigation.dispatch(StackActions.push(ABOUT_SCREEN))

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Pressable style={styles.aboutBtnStyle} onPress={OnAboutPress}>
                <Ionicons name="alert-circle-outline" size={20} color={theme.colors.black} />
            </Pressable>
            <ThemeToggleButton style={styles.themeBtnStyle} />

            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>
                    Union<Text style={styles.logoTextAccent}>Bank</Text>
                </Text>
                <Text style={styles.desText}>Pure Banking Nothing Else</Text>
            </View>

            <View style={styles.contentContainer}>
                {children}
            </View>
        </SafeAreaView >
    );
}