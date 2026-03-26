import { colors, fontFamilies, spacing } from '@/constants/tokens';
import { UserCircle } from 'lucide-react-native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ProviderInfoProps {
    name: string;
    avatarUrl?: string;
}

export default function ProviderInfo({ name, avatarUrl }: ProviderInfoProps) {
    return (
        <View style={styles.container}>
            {avatarUrl ? (
                <Image source={{ uri: avatarUrl }} style={styles.avatar} />
            ) : (
                <UserCircle size={16} color={colors.onSurface} opacity={0.4} />
            )}
            <Text style={styles.name}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: spacing[2],
    },
    avatar: {
        width: 16,
        height: 16,
        borderRadius: 8,
    },
    name: {
        fontFamily: fontFamilies.bodySemiBold,
        fontSize: 10,
        textTransform: 'uppercase',
        color: colors.onSurface,
        opacity: 0.6,
        marginLeft: spacing[1],
    },
});
