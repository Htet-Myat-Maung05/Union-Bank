import BeneficiaryScreen from "@/screens/beneficiary-screen";
import DashBoardScreen from "@/screens/dashboard-screen";
import NearByScreen from "@/screens/near-by-screen";
import WalletScreen from "@/screens/wallet-screen";
import { RouteMapType } from "./Root.routes";
import ProfileScreen from "@/screens/profile-screen";

export const BottomTabRoutes: RouteMapType = {
    Dashboard: { name: 'DASHBOARD_SCREEN', component: DashBoardScreen },
    NearBy: { name: 'NEAR_BY_SCREEN', component: NearByScreen },
    Floating: { name: 'FLOATING_MENU', component: WalletScreen },
    Beneficiary: {
        name: 'BENEFICIARY_SCREEN', component: BeneficiaryScreen
    },
    Profile: { name: 'PROFILE_SCREEN', component: ProfileScreen },
}