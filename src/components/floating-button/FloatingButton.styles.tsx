import { IExtendedTheme } from "@/styles/Theme";
import { StyleSheet } from "react-native";

const getStyles = (theme: IExtendedTheme) => StyleSheet.create({
    modal: {
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    modalContent: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 65,
    },
    mainButton: {
        height: 50,
        width: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 7,
        position: 'absolute',
        bottom: 40,
        zIndex: 10,
        left: -25,
    },
    centeredMainButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginLeft: -25,
        marginTop: -25,
        zIndex: 2,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outline: {
        borderWidth: 1,
        borderColor: theme.colors.primary
    },
    actionButton: {
        width: 35,
        height: 35,
        position: 'absolute',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    childrenContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 10,
        marginTop: 4,
        color: theme.colors.white,
        textAlign: 'center',
        position: 'absolute',
        top: 30,
    },
});

export default getStyles;