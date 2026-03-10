import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PublicStackParamList } from './types/PublicNavigation.types'
import { PublicRoutes } from './routes/Public.routes';

const PublicStack = createNativeStackNavigator<PublicStackParamList>();

const PublicNavigation: React.FC = () => {
    return (
        <PublicStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={PublicRoutes.Login.name as keyof PublicStackParamList}>
            {Object.values(PublicRoutes).map((route, i) => (
                <PublicStack.Screen key={i} name={route.name as keyof PublicStackParamList} component={route.component} />
            ))}
        </PublicStack.Navigator>
    )
}

export default PublicNavigation