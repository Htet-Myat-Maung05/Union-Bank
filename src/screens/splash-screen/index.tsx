import LottieView from "lottie-react-native"
import { useEffect, useRef } from "react"
import { View } from "react-native";
import getStyles from "./SplashScreen.styles";
import { StackActions, useNavigation } from "@react-navigation/native";
import { LOGIN_SCREEN } from "@/constants/Route.constants";

const SplashScreen: React.FC = () => {
    const styles = getStyles();
    const navigation = useNavigation();

    const masterCardAnimationRef = useRef<LottieView>(null);
    const loadingAnimationRef = useRef<LottieView>(null);

    useEffect(() => {
        const MStartFrame = 10;
        const MEndFrame = 100;

        const LStartFrame = 10;
        const LEndFrame = 300;

        masterCardAnimationRef.current?.play(MStartFrame, MEndFrame);
        loadingAnimationRef.current?.play(LStartFrame, LEndFrame);
    }, [])

    setTimeout(() => {
        navigation.dispatch(StackActions.replace(LOGIN_SCREEN))
    }, 2000)

    return (
        <View style={styles.mainContainer}>
            <LottieView ref={masterCardAnimationRef} source={require('@/assets/lotties/VitraCash.json')} loop style={styles.masterAnimation} />
            <LottieView ref={loadingAnimationRef} source={require('@/assets/lotties/Loading_Dots.json')} loop style={styles.loadingAnimation}
                colorFilters={[
                    { keypath: "Dot1", color: "#ffffff" },
                    { keypath: "Dot2", color: "#ffffff" },
                    { keypath: "Dot3", color: "#ffffff" },
                    { keypath: "Dot4", color: "#ffffff" },
                ]} />
        </View>
    )
}

export default SplashScreen