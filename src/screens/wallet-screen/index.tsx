import { View, Text } from 'react-native'
import React from 'react'
import useCustomTheme from '@/hooks/useCustomTheme.hook';
import getStyles from './WalletScreen.styles';

const WalletScreen = () => {
    const theme = useCustomTheme();
    const styles = getStyles(theme);

    return (
        <View>
            <Text style={styles.text}>WalletScreen</Text>
        </View>
    )
}

export default WalletScreen