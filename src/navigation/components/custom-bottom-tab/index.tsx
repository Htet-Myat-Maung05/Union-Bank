import useCustomTheme from "@/hooks/useCustomTheme.hook";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useDebouncedCallback } from 'use-debounce';
import { Pressable, View } from "react-native";
import { FLOATING_MENU } from "@/constants/Route.constants";
import RNText from '@/components/custom-text'
import getStyles from "./CustomBottomTabBar.styles";
import FloatingMenu from "@/components/floating-button";
import { memo, useCallback, useMemo } from "react";

const FloatingTab = memo(({ navigation }: { navigation: any }) => {
    const actions = useMemo(() => [
        {
            icon: 'qr-code-outline',
            label: 'Scan QR',
            color: '#007AFF',
            onPress: () => navigation.navigate('QR_SCREEN'),
        },
        {
            icon: 'arrow-down-outline',
            label: 'Cash In',
            color: '#34C759',
            onPress: () => navigation.navigate('CASHIN_SCREEN'),
        },
        {
            icon: 'arrow-up-outline',
            label: 'Cash Out',
            color: '#FF3B30',
            onPress: () => navigation.navigate('CASHOUT_SCREEN'),
        },
        {
            icon: 'swap-horizontal-outline',
            label: 'Transfer',
            color: '#FF9500',
            onPress: () => navigation.navigate('TRANSFER_SCREEN'),
        },
    ], [navigation]);

    return <FloatingMenu actions={actions} />;
});

const CustomBottomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const theme = useCustomTheme();
    const styles = getStyles(theme);

    const ACTIVE_COLOR = theme.colors.primary;
    const INACTIVE_COLOR = theme.colors.black;

    const getIcon = useCallback((routeName: string, isFocused: boolean) => {

        const color = isFocused ? ACTIVE_COLOR : INACTIVE_COLOR;
        const size = 24;

        switch (routeName) {
            case 'DASHBOARD_SCREEN':
                return <Ionicons name="home-outline" size={size} color={color} />;
            case 'NEAR_BY_SCREEN':
                return <Ionicons name="location-outline" size={size} color={color} />;
            case 'BENEFICIARY_SCREEN':
                return <Ionicons name="people-outline" size={size} color={color} />;
            case 'PROFILE_SCREEN':
                return <Ionicons name="person-outline" size={size} color={color} />;
            default:
                return null;
        }
    }, [ACTIVE_COLOR, INACTIVE_COLOR])

    const navigateDebounced = useDebouncedCallback(
        (routeName: string, routeKey: string, isFocused: boolean) => {
            const event = navigation.emit({
                type: 'tabPress',
                target: routeKey,
                canPreventDefault: true
            })

            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(routeName);
            }
        },
        1000,
        { leading: true, trailing: false }
    );

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel as string;
                const isFocused = state.index === index;

                if (route.name === FLOATING_MENU) {
                    return (
                        <View key={index} >
                            <FloatingTab navigation={navigation} />
                        </View>
                    );
                }

                return (
                    <Pressable
                        key={route.key}
                        onPress={() => navigateDebounced(route.name, route.key, isFocused)}
                        style={styles.tabItem}>
                        {isFocused && <View style={[styles.activeBar, { backgroundColor: ACTIVE_COLOR }]} />}
                        <View style={styles.iconLabel}>
                            {getIcon(route.name, isFocused)}
                            <RNText style={[styles.label, { color: isFocused ? ACTIVE_COLOR : INACTIVE_COLOR }]}>
                                {label}
                            </RNText>
                        </View>
                    </Pressable>
                )
            })}
        </View>
    )
}

export default memo(CustomBottomTabBar);