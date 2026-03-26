import { colors, fontFamilies, spacing } from '@/constants/tokens';
import { Menu, ShoppingBag } from 'lucide-react-native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TopBarProps {
    logoText: string;
    onMenuPress: () => void;
    onCartPress: () => void;
    cartCount?: number;
}

export default function TopBar({
    logoText,
    onMenuPress,
    onCartPress,
    cartCount = 0,
}: TopBarProps) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
                    <Menu size={24} color={colors.onSurface} strokeWidth={1.5} />
                </TouchableOpacity>

                <Text style={styles.logoText}>{logoText}</Text>

                <TouchableOpacity onPress={onCartPress} style={styles.iconButton}>
                    <ShoppingBag size={24} color={colors.onSurface} strokeWidth={1.5} />
                    {cartCount > 0 && (
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{cartCount}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: colors.surfaceContainerLow,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing[4],
        paddingVertical: spacing[3],
        height: 64,
    },
    iconButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    logoText: {
        fontFamily: fontFamilies.displayBold,
        fontSize: 16,
        color: colors.onSurface,
        letterSpacing: 1.5,
    },
    badge: {
        position: 'absolute',
        top: 6,
        right: 6,
        backgroundColor: colors.primary,
        minWidth: 16,
        height: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 3,
    },
    badgeText: {
        color: colors.onPrimary,
        fontSize: 10,
        fontFamily: fontFamilies.bodySemiBold,
        lineHeight: 12,
    },
});
