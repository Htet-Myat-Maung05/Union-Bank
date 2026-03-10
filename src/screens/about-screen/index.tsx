import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNText from '@/components/custom-text';
import useCustomTheme from '@/hooks/useCustomTheme.hook';
import getStyles from './AboutScreen.styles';
import BackButton from '@/components/back-button';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function AboutUsScreen() {
    const theme = useCustomTheme();
    const styles = getStyles(theme);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <BackButton />

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}>


                {/* Logo Section */}
                <View style={styles.logoSection}>
                    <RNText style={styles.logoText}>
                        Union<RNText style={styles.logoTextSub}>Bank</RNText>
                    </RNText>
                    <RNText style={styles.tagline}>
                        Pure Banking Nothing Else
                    </RNText>
                </View>

                {/* Divider */}
                <View style={styles.divider} />

                {/* About Section */}
                <View style={styles.section}>
                    <RNText style={[styles.sectionTitle, { color: theme.colors.text }]}>
                        About Us
                    </RNText>
                    <RNText style={[styles.sectionContent, { color: theme.colors.icon }]}>
                        UnionBank is a trusted banking institution in Myanmar,
                        dedicated to providing accessible and convenient financial services
                        for everyone.
                    </RNText>
                </View>

                <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />

                {/* Features Section */}
                <View style={styles.section}>
                    <RNText style={[styles.sectionTitle, { color: theme.colors.text }]}>
                        Our Services
                    </RNText>

                    {[
                        { icon: 'card-outline', title: 'Online Banking', desc: 'Transfer money anytime, anywhere' },
                        { icon: 'shield-checkmark-outline', title: 'Secure Payments', desc: 'Safe and reliable payment system' },
                        { icon: 'bar-chart-outline', title: 'Account Management', desc: 'Easily manage your account information' },
                        { icon: 'phone-portrait-outline', title: 'Mobile Banking', desc: 'Convenient banking right from your phone' },
                    ].map((item, index) => (
                        <View
                            key={index}
                            style={[styles.featureItem, { backgroundColor: theme.colors.card }]}>
                            <Ionicons name={item.icon} size={24} color={theme.colors.primary} />
                            <View style={styles.featureText}>
                                <RNText style={[styles.featureTitle, { color: theme.colors.text }]}>
                                    {item.title}
                                </RNText>
                                <RNText style={[styles.featureDesc, { color: theme.colors.icon }]}>
                                    {item.desc}
                                </RNText>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Divider */}
                <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />

                {/* Contact Section */}
                <View style={styles.section}>
                    <RNText style={[styles.sectionTitle, { color: theme.colors.text }]}>
                        Contact Us
                    </RNText>

                    {[
                        { icon: 'call-outline', label: 'Phone', value: '+95 1 234 5678' },
                        { icon: 'mail-outline', label: 'Email', value: 'support@unionbank.com.mm' },
                        { icon: 'globe-outline', label: 'Website', value: 'www.unionbank.com.mm' },
                        { icon: 'location-outline', label: 'Address', value: 'Yangon, Myanmar' },
                    ].map((item, index) => (
                        <View key={index} style={styles.contactItem}>
                            <Ionicons name={item.icon} size={20} color={theme.colors.primary} />
                            <View>
                                <RNText style={[styles.contactLabel, { color: theme.colors.icon }]}>
                                    {item.label}
                                </RNText>
                                <RNText style={[styles.contactValue, { color: theme.colors.text }]}>
                                    {item.value}
                                </RNText>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Divider */}
                <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />

                {/* Version */}
                <View style={styles.versionSection}>
                    <RNText style={[styles.version, { color: theme.colors.icon }]}>
                        Version 1.0.0
                    </RNText>
                    <RNText style={[styles.copyright, { color: theme.colors.icon }]}>
                        © 2026 UnionBank. All rights reserved.
                    </RNText>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

