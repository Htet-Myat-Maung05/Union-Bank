import useCustomTheme from "@/hooks/useCustomTheme.hook";
import { Pressable, View } from "react-native";
import Animated, { SharedValue, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming, } from "react-native-reanimated";
import getStyles from "./FloatingButton.styles";
import Ionicons from 'react-native-vector-icons/Ionicons'
import RNText from '../custom-text'
import { memo, useState } from "react";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

//bounce behavior
const SPRING_CONFIG = {
    damping: 12,
    stiffness: 120,
    mass: 0.8,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
};

const OFFSET = 110; //main button ka ny distance bl louk htr ma ll

export interface FloatingAction {
    icon: string;
    label?: string;
    onPress: () => void;
    color?: string;
}

interface FloatingMenuProps {
    actions: FloatingAction[];
}

interface FloatingActionButtonProps {
    isExpanded: SharedValue<boolean>;
    index: number;
    totalButtons: number;
    onPress?: () => void;
    icon: string;
    label?: string;
    color?: string;
}



const FloatingActionButton = ({
    isExpanded,
    index,
    totalButtons,
    onPress,
    icon,
    label,
    color = '#007AFF',
}: FloatingActionButtonProps) => {
    const theme = useCustomTheme();
    const styles = getStyles(theme);

    const animatedStyles = useAnimatedStyle(() => {
        // calculate fan shape angle
        const spreadAngle = (130 * Math.PI) / 180;   // 130° fan
        const rotationOffset = (26 * Math.PI) / 180;  // starting angle
        const angleStep = spreadAngle / (totalButtons - 1);
        const angle = angleStep * (index - 1) + rotationOffset;

        const moveDistance = isExpanded.value ? OFFSET : 0;

        const translateX = withSpring(Math.cos(angle) * moveDistance, SPRING_CONFIG);
        const translateY = withSpring(-Math.sin(angle) * moveDistance, SPRING_CONFIG);

        const openDelay = isExpanded.value ? index * 100 : 0;
        const closeDelay = !isExpanded.value ? (totalButtons - index) * 80 : 0;
        const delay = isExpanded.value ? openDelay : closeDelay;

        const scaleValue = isExpanded.value ? 1 : 0;

        return {
            transform: [
                { translateX },
                { translateY },
                { scale: withDelay(delay, withTiming(scaleValue, { duration: 200 })) },
            ],
        };
    });

    return (
        <AnimatedPressable
            style={[animatedStyles, styles.actionButton, { backgroundColor: color }]}
            onPress={onPress}>
            <View style={styles.childrenContainer}>
                <Ionicons name={icon} size={22} color="#fff" />
                {label ? (
                    <RNText style={styles.label}>{label}</RNText>
                ) : null}
            </View>
        </AnimatedPressable>
    );
};

const FloatingMenu = ({ actions }: FloatingMenuProps) => {
    const theme = useCustomTheme();
    const styles = getStyles(theme);
    const isExpanded = useSharedValue(false);
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
        setTimeout(() => {
            isExpanded.value = true;
        }, 100);
    };

    const closeMenu = () => {
        isExpanded.value = false;
        setIsOpen(false);
    };

    const handleActionPress = () => {
        closeMenu();
    };

    return (
        <>
            <AnimatedPressable
                onPress={isOpen ? closeMenu : openMenu}
                style={[styles.outline, styles.mainButton, { backgroundColor: theme.colors.background }]}>
                <Ionicons
                    name={isOpen ? 'close' : 'add-outline'}
                    size={24}
                    color={theme.colors.text}
                />
            </AnimatedPressable>

            <View style={styles.modalContent}>
                {actions.map((action, idx) => (
                    <FloatingActionButton
                        key={idx}
                        isExpanded={isExpanded}
                        index={idx + 1}
                        totalButtons={actions.length}
                        onPress={() => handleActionPress()}
                        icon={action.icon}
                        label={action.label}
                        color={action.color}
                    />
                ))}
            </View>

        </>
    );
}

export default memo(FloatingMenu)