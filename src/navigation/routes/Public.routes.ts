import SplashScreen from "@/screens/splash-screen";
import { RouteMapType } from "./Root.routes";
import LoginScreen from "@/screens/login-screen";
import AboutUsScreen from "@/screens/about-screen";

export const PublicRoutes: RouteMapType = {
    Splash: {
        name: 'SPLASH_SCREEN',
        component: SplashScreen
    },
    Login: {
        name: 'LOGIN_SCREEN',
        component: LoginScreen
    },
    About: {
        name: 'ABOUT_SCREEN',
        component: AboutUsScreen
    }
}