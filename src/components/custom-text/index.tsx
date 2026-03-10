import { memo } from "react";
import { StyleProp, Text, TextStyle, TextProps as RNTextProps } from "react-native";
import getStyles from "./CustomText.styles";
import useCustomTheme from "@/hooks/useCustomTheme.hook";

type TProps = RNTextProps & {
    style?: StyleProp<TextStyle>;
}

const RNText = ({ style, children, ...rest }: TProps) => {
    const theme = useCustomTheme();
    const styles = getStyles(theme)

    return (
        <Text {...rest} allowFontScaling={false} style={[styles.defaultStyle, style]} >
            {children}
        </Text>
    )
}

export default memo(RNText);