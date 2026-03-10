import useCustomTheme from "@/hooks/useCustomTheme.hook";
import { Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import getStyles from "./SocialLoginButton.styles";

interface SocialLoginButtonProps {
    icon: string,
    label: string,
    onPress: () => void,
    iconColor?: string
}

export const SocialLoginButton = ({ icon, label, onPress, iconColor = '#fff' }: SocialLoginButtonProps) => {

    const theme = useCustomTheme();
    const styles = getStyles(theme);

    return (
        <Pressable style={styles.btn} onPress={onPress}>
            <Ionicons name={icon} size={20} color={iconColor} />
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    )
}