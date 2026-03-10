import { IExtendedTheme } from "@/styles/Theme";
import { useTheme } from "@react-navigation/native";

export default function useCustomTheme(): IExtendedTheme {
    return useTheme() as IExtendedTheme;
}