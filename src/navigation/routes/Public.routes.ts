import SplashScreen from "@/screens/splash-screen";
import { RouteMapType } from "./Root.routes";
import LoginScreen from "@/screens/login-screen";
import AboutUsScreen from "@/screens/about-screen";
import RegisterScreen from "@/screens/sign-up";

export const PublicRoutes: RouteMapType = {
    Splash: {
        name: 'SPLASH_SCREEN',
        component: SplashScreen
    },
    Login: {
        name: 'LOGIN_SCREEN',
        component: LoginScreen
    },
    Register: {
        name: 'REGISTER_SCREEN',
        component: RegisterScreen
    },
    About: {
        name: 'ABOUT_SCREEN',
        component: AboutUsScreen
    },
}