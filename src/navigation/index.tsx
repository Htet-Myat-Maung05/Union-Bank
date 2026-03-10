import { SPLASH_SCREEN } from '@/constants/Route.constants';
import { useAppSelector } from '@/hooks/redux.hook';
import LoginScreen from '@/screens/login-screen';
import SplashScreen from '@/screens/splash-screen';
import { CustomDarkTheme, CustomLightTheme, IExtendedTheme } from '@/styles/Theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { StatusBar } from 'react-native';

const RootStack = createNativeStackNavigator()

const RootNavigation: React.FC = () => {
    const isDarkMode: boolean = useAppSelector(state => state?.theme?.isDarkMode);
    const theme: IExtendedTheme = isDarkMode ? CustomDarkTheme : CustomLightTheme;

    return (
        <NavigationContainer theme={theme}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#000000'} />
            <RootStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }} initialRouteName={SPLASH_SCREEN}>
                <RootStack.Screen name='SPLASH_SCREEN' component={SplashScreen} />
                <RootStack.Screen name='LOGIN_SCREEN' component={LoginScreen} />
            </RootStack.Navigator>
        </NavigationContainer >
    )
}

export default RootNavigation;