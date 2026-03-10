import SplashScreen from "@/screens/splash-screen";
import { RouteMapType } from "./Root.routes";
import LoginScreen from "@/screens/login-screen";

export const PublicRoutes: RouteMapType = {
    Splash: {
        name: 'SPLASH_SCREEN',
        component: SplashScreen
    },
    Login: {
        name: 'LOGIN_SCREEN',
        component: LoginScreen
    }
}