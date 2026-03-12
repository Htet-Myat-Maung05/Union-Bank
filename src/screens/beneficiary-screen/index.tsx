import { View, Text } from 'react-native'
import React from 'react'
import useCustomTheme from '@/hooks/useCustomTheme.hook';
import getStyles from './BeneficiaryScreen.styles';
import ThemeToggleButton from '@/components/theme-button';

const BeneficiaryScreen = () => {
    const theme = useCustomTheme();
    const styles = getStyles(theme);

    return (
        <View>
            <Text style={styles.text}>BeneficiaryScreen</Text>
            <ThemeToggleButton />
        </View>
    )
}

export default BeneficiaryScreen