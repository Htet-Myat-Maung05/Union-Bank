import { View, Text, Pressable } from 'react-native'
import React from 'react'
import useCustomTheme from '@/hooks/useCustomTheme.hook'
import { useAppDispatch } from '@/hooks/redux.hook';
import { setLogout } from '@/redux/slices/authSlice';
import getStyles from './ProfileScreen.styles';

const ProfileScreen = () => {
    const theme = useCustomTheme();
    const styles = getStyles(theme);
    const dispatch = useAppDispatch();

    const onPress = () => dispatch(setLogout())

    return (
        <View>
            <Text style={styles.text}>ProfileScreen</Text>
            <Pressable onPress={onPress}>
                <Text style={styles.text}>Sign out</Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen