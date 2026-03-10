import useCustomTheme from "@/hooks/useCustomTheme.hook";
import { toggleTheme } from "@/redux/slices/themeSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { Pressable, ViewStyle } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

interface ThemeButtonProps {
    style?: ViewStyle
}

const ThemeToggleButton: React.FC<ThemeButtonProps> = ({ style }) => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)
    const theme = useCustomTheme();

    const onPress = () => dispatch(toggleTheme())
    const iconColor = theme.colors.black

    return (
        <Pressable onPress={onPress} style={style}>
            <Ionicons name={isDarkMode ? 'sunny-outline' : 'moon-outline'} size={18} color={iconColor} />
        </Pressable>
    )
}

export default ThemeToggleButton;