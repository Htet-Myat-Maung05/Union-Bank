import { StyleSheet } from "react-native";

const getStyles = () => StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },
    masterAnimation: {
        flex: 1,
        width: 200,
        height: 200,
    },
    loadingAnimation: {
        width: 200,
        height: 200,
    }
})

export default getStyles