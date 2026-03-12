import { IExtendedTheme } from "@/styles/Theme";
import { StyleSheet } from "react-native";

const getStyles = (theme: IExtendedTheme) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            height: 70,
            backgroundColor: theme.colors.background
        },
        floatingContainer: {
            // flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center'
            position: 'absolute',
            left: 180,
            bottom: 45,
        },
        floatingBtn: {
            width: 40,
            height: 40,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        activeBar: {
            position: 'absolute',
            top: 0,
            width: '50%',
            height: 4,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
        },
        tabItem: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
        },
        iconLabel: {
            alignItems: 'center',
            gap: 4,
        },
        label: {
            fontSize: 11,
        },
    })

export default getStyles;