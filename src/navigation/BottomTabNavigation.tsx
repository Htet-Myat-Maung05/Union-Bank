import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomStackParamList } from "./types/BottomTabNavigation.types";
import { BottomTabRoutes } from "./routes/BottomTab.toutes";
import CustomBottomTabBar from "./components/custom-bottom-tab";

const Tab = createBottomTabNavigator<BottomStackParamList>();

export default function BottomTabNavigation() {
    const labels = (key: number) => {
        let label: string;
        switch (key) {
            case 0:
                label = 'HOME';
                break;
            case 1:
                label = 'NEAR';
                break;
            case 3:
                label = 'BENEFIT';
                break;
            default:
                label = 'PROFILE';
        }
        return label;
    }
    return (
        <Tab.Navigator
            tabBar={props => <CustomBottomTabBar {...props} />}
            screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            {Object.values(BottomTabRoutes).map((route, i) => {
                const label: string = labels(i);
                return (
                    <Tab.Screen
                        key={i}
                        name={route.name as keyof BottomStackParamList}
                        component={route.component}
                        options={{ tabBarLabel: label }} />
                )
            })}
        </Tab.Navigator>
    )
}