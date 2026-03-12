import { RouteProp } from "@react-navigation/native";

export type BottomStackParamList = {
    DASHBOARD_SCREEN: { userId: string }; // Add other screens here as needed
    WALLET_SCREEN: undefined;
    PROFILE_SCREEN: { userId: string };
    NEAR_BY_SCREEN: undefined;
}

export type DashboardRouteProp = RouteProp<BottomStackParamList, 'DASHBOARD_SCREEN'>
export type WalletRouteProp = RouteProp<BottomStackParamList, 'WALLET_SCREEN'>
export type ProfileRouteProp = RouteProp<BottomStackParamList, 'PROFILE_SCREEN'>
export type NearByRouteProp = RouteProp<BottomStackParamList, 'NEAR_BY_SCREEN'>