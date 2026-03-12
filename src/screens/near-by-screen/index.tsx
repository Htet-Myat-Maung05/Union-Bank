import { View, Text } from 'react-native'
import React from 'react'
import useCustomTheme from '@/hooks/useCustomTheme.hook';
import getStyles from './NearByScreen.syles';

const NearByScreen = () => {
    const theme = useCustomTheme();
    const styles = getStyles(theme);

    return (
        <View>
            <Text style={styles.text}>NearByScreen</Text>
        </View>
    )
}

export default NearByScreen