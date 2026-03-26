import { colors, fontFamilies, radius, spacing } from '@/constants/tokens';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface VerifiedBadgeProps {
    label?: string;
}

export default function VerifiedBadge({ label = 'VERIFIED' }: VerifiedBadgeProps) {
    return (
        <BlurView intensity={20} style={styles.container}>
            <View style={styles.dot} />
            <Text style={styles.text}>{label}</Text>
        </BlurView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 8,
        left: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: radius.full,
        paddingVertical: spacing[1],
        paddingHorizontal: spacing[2],
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        overflow: 'hidden',
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: colors.gold,
        marginRight: spacing[1],
    },
    text: {
        fontFamily: fontFamilies.bodySemiBold,
        fontSize: 9,
        color: colors.onSurface,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
});
