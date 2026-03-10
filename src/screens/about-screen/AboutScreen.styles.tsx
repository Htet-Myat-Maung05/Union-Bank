
import { IExtendedTheme } from "@/styles/Theme";
import { StyleSheet } from "react-native";

const getStyles = (theme: IExtendedTheme) =>
    StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: theme.colors.background
        },
        scrollContent: {
            paddingHorizontal: 20,
            paddingVertical: 24,
            gap: 0,
        },
        logoSection: {
            alignItems: 'center',
            paddingVertical: 24,
        },
        logoText: {
            fontSize: 36,
            fontWeight: '800',
            letterSpacing: 2,
            color: theme.colors.primary
        },
        logoTextSub: {
            fontSize: 36,
            fontWeight: '800',
            letterSpacing: 2,
            color: theme.colors.primaryTextColor
        },
        tagline: {
            fontSize: 13,
            marginTop: 6,
            color: theme.colors.black
        },
        divider: {
            height: 1,
            marginVertical: 20,
            backgroundColor: theme.colors.placeHolderTextColor
        },
        section: {
            gap: 12,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 4,
        },
        sectionContent: {
            fontSize: 14,
            lineHeight: 22,
        },
        featureItem: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 14,
            borderRadius: 12,
            gap: 12,
        },
        featureIcon: {
            fontSize: 24,
        },
        featureText: {
            gap: 2,
        },
        featureTitle: {
            fontSize: 15,
            fontWeight: '600',
        },
        featureDesc: {
            fontSize: 13,
        },
        contactItem: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            paddingVertical: 6,
        },
        contactIcon: {
            fontSize: 20,
        },
        contactLabel: {
            fontSize: 12,
        },
        contactValue: {
            fontSize: 14,
            fontWeight: '500',
        },
        versionSection: {
            alignItems: 'center',
            gap: 6,
            paddingVertical: 12,
        },
        version: {
            fontSize: 13,
        },
        copyright: {
            fontSize: 12,
        },
    });

export default getStyles;