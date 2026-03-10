import useCustomTheme from "@/hooks/useCustomTheme.hook";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import getStyles from "./BackButton.styles";

interface BackButtonProps {
    onPress?: () => void;  // custom onPress မပေးရင် goBack() သုံးမယ်
}

export default function BackButton({ onPress }: BackButtonProps) {
    const theme = useCustomTheme();
    const styles = getStyles(theme);
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={onPress ?? (() => navigation.goBack())}
            style={[styles.btn, { backgroundColor: theme.colors.card }]}>
            <Ionicons name="chevron-back" size={20} style={styles.text} />
        </Pressable>
    );
}
