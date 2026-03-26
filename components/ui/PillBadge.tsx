import { colors, fontFamilies, radius, spacing } from '@/constants/tokens';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface PillBadgeProps {
    label: string;
    variant: 'cream' | 'dark';
}

export default function PillBadge({ label, variant }: PillBadgeProps) {
    const isCream = variant === 'cream';

    return (
        <View style={[
            styles.container,
            { backgroundColor: isCream ? '#F5E6C8' : colors.onBackground }
        ]}>
            <Text style={[
                styles.text,
                { color: isCream ? colors.onSurface : colors.background }
            ]}>
                {label}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: radius.full,
        paddingVertical: spacing[1],
        paddingHorizontal: spacing[3],
        alignSelf: 'flex-start',
    },
    text: {
        fontFamily: fontFamilies.bodySemiBold,
        fontSize: 10,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
});
