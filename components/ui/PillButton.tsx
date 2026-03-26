import { colors, fontFamilies, radius, spacing } from '@/constants/tokens';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface PillButtonProps {
    label: string;
    variant: 'filled' | 'outlined';
    onPress: () => void;
    fullWidth?: boolean;
}

export default function PillButton({ label, variant, onPress, fullWidth }: PillButtonProps) {
    const isFilled = variant === 'filled';

    const containerStyle: ViewStyle = {
        ...(fullWidth && { width: '100%' }),
    };

    if (isFilled) {
        return (
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.8}
                style={[styles.base, containerStyle]}
            >
                <LinearGradient
                    colors={[colors.primary, colors.primaryContainer]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradient}
                >
                    <Text style={[styles.text, { color: colors.onPrimary }]}>{label}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[styles.base, styles.outlined, containerStyle]}
        >
            <Text style={[styles.text, { color: colors.onSurface }]}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    base: {
        borderRadius: radius.full,
        overflow: 'hidden',
    },
    gradient: {
        paddingVertical: spacing[3],
        paddingHorizontal: spacing[6],
        alignItems: 'center',
        justifyContent: 'center',
    },
    outlined: {
        backgroundColor: colors.surfaceContainerHighest,
        paddingVertical: spacing[3],
        paddingHorizontal: spacing[6],
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: fontFamilies.bodySemiBold,
        fontSize: 11,
        letterSpacing: 1,
        textAlign: 'center',
    },
});
