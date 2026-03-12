import { SPLASH_SCREEN } from '@/constants/Route.constants';
import { useAppSelector } from '@/hooks/redux.hook';
import SplashScreen from '@/screens/splash-screen';
import { CustomDarkTheme, CustomLightTheme, IExtendedTheme } from '@/styles/Theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { StatusBar } from 'react-native';
import { PublicRoutes } from './routes/Public.routes';
import BottomTabNavigation from './BottomTabNavigation';

const RootStack = createNativeStackNavigator()

const AuthNavigation = () => {

    //login state from redux
    const isLogin = useAppSelector(state => state.auth.isLogin)

    return (
        <RootStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            {isLogin ? (
                <RootStack.Screen
                    name='BOTTOM_TAB_NAVIGATION'
                    component={BottomTabNavigation} />
            ) : (
                <>
                    <RootStack.Screen
                        name={PublicRoutes.Login.name}
                        component={PublicRoutes.Login.component}
                    />
                    <RootStack.Screen
                        name={PublicRoutes.About.name}
                        component={PublicRoutes.About.component}
                    />
                    <RootStack.Screen
                        name={PublicRoutes.Register.name}
                        component={PublicRoutes.Register.component}
                    />
                </>
            )}
        </RootStack.Navigator>
    )
}

const RootNavigation: React.FC = () => {
    const isDarkMode: boolean = useAppSelector(state => state?.theme?.isDarkMode);
    const theme: IExtendedTheme = isDarkMode ? CustomDarkTheme : CustomLightTheme;

    return (
        <NavigationContainer theme={theme}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={theme.colors.background}
            />
            <RootStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }} initialRouteName={SPLASH_SCREEN}>
                <RootStack.Screen name='SPLASH_SCREEN' component={SplashScreen} />
                <RootStack.Screen name='AUTH_NAVIGATION' component={AuthNavigation} />
            </RootStack.Navigator>
        </NavigationContainer >
    )
}

export default RootNavigation;