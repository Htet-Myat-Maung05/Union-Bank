import { View, Text, Pressable } from 'react-native'
import React from 'react'
import useCustomTheme from '@/hooks/useCustomTheme.hook'
import getStyles from './DashboardScreen.styles';
import { useAppDispatch } from '@/hooks/redux.hook';
import { setLogout } from '@/redux/slices/authSlice';

const DashBoardScreen = () => {
    const theme = useCustomTheme();
    const styles = getStyles(theme);
    const dispatch = useAppDispatch();

    const onPress = () => dispatch(setLogout())

    return (
        <View>
            <Text style={styles.text}>DashBoardScreen</Text>
            <Pressable onPress={onPress}>
                <Text style={styles.text}>Sign out</Text>
            </Pressable>
        </View>
    )
}

export default DashBoardScreen