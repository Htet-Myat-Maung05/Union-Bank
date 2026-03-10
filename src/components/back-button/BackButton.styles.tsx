import { StyleSheet } from "react-native";

const getStyles = () => StyleSheet.create({
    btn: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 10,
        width: 35,
        height: 35,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default getStyles