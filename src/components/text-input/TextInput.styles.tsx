import COLORS from '@/styles/Colors';
import FONT_SIZE from '@/styles/FontSize';
import { IExtendedTheme } from '@/styles/Theme';
import { StyleSheet } from 'react-native';

const getStyles = (theme: IExtendedTheme) =>
    StyleSheet.create({
        eyeIcon: {
            padding: 5,
        },
        input: {
            borderRadius: 15,
            borderWidth: 1,
            flexDirection: 'row',
            overflow: 'hidden',
            paddingHorizontal: 10,
            alignItems: 'center',
            backgroundColor: theme.colors.gray
        },
        inputSub: {
            shadowColor: theme.colors.textInputFocusBorderShadowColor1,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.4,
            shadowRadius: 4,
            elevation: 5,
        },
        inputStyle: {
            color: theme.colors.text,
            flex: 1,
            height: 40,
            paddingBottom: 0,
            paddingTop: 0,
        },
        label: {
            fontSize: FONT_SIZE.md,
            marginBottom: 5,
            paddingTop: 9,
        },
        mainContainer: {
            // flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            textAlign: 'center',
        },
        password: {
            height: 45,
        },
        prefix: {
            //   color: COLORS.textBlack,
            //   fontFamily: FONTS.regular,
            fontSize: FONT_SIZE.lg,
        },
        prefixContainer: {
            borderRightColor: COLORS.secondary,
            borderRightWidth: 0.5,
            height: '100%',
            justifyContent: 'center',
            marginRight: 10,
            paddingHorizontal: 14,
        },
        star: {
            color: COLORS.error,
            marginBottom: 5,
            marginLeft: 5,
        },
        toggle: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
        },
        leftIconContainer: {
            marginRight: 8,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

export default getStyles;
