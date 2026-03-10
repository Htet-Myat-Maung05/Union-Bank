import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import React from 'react';
import COLORS from '@/styles/Colors';
import FONT_SIZE from '@/styles/FontSize';

type Props = {
    errorMessage?: string;
    textStyle?: StyleProp<TextStyle>;
};

export default function FormFieldErrorMessage({
    errorMessage,
    textStyle,
}: Props) {
    return (
        <View>
            <Text allowFontScaling={false} style={[styles.buttonWrapper, textStyle]}>
                {errorMessage}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonWrapper: {
        color: COLORS.error,
        fontSize: FONT_SIZE.md,
        marginTop: 5,
        lineHeight: FONT_SIZE.md * 1.5,
    },
});
