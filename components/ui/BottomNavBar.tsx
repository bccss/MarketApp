import { colors, spacing } from '@/constants/tokens';
import { BlurView } from 'expo-blur';
import { Home, MessageCircle, PlusCircle, Search, User } from 'lucide-react-native';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface BottomNavBarProps {
    activeTab: 'home' | 'search' | 'add' | 'messages' | 'profile';
    onTabChange: (tab: string) => void;
}

export default function BottomNavBar({ activeTab, onTabChange }: BottomNavBarProps) {
    const insets = useSafeAreaInsets();

    const tabs = [
        { id: 'home', Icon: Home },
        { id: 'search', Icon: Search },
        { id: 'add', Icon: PlusCircle, isSpecial: true },
        { id: 'messages', Icon: MessageCircle },
        { id: 'profile', Icon: User },
    ];

    return (
        <BlurView intensity={40} tint="light" style={[styles.container, { paddingBottom: insets.bottom || spacing[4] }]}>
            <View style={styles.content}>
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    const { Icon } = tab;

                    if (tab.isSpecial) {
                        return (
                            <TouchableOpacity
                                key={tab.id}
                                onPress={() => onTabChange(tab.id)}
                                activeOpacity={0.8}
                                style={styles.specialButton}
                            >
                                <Icon size={24} color={colors.onPrimary} />
                            </TouchableOpacity>
                        );
                    }

                    return (
                        <TouchableOpacity
                            key={tab.id}
                            onPress={() => onTabChange(tab.id)}
                            activeOpacity={0.7}
                            style={styles.tabButton}
                        >
                            <Icon
                                size={24}
                                color={isActive ? colors.primary : colors.onSurface}
                                opacity={isActive ? 1 : 0.4}
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                            {isActive && <View style={styles.activeDot} />}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </BlurView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(252,249,248,0.7)',
        borderTopWidth: 0,
        paddingTop: spacing[3],
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: spacing[4],
    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        width: 44,
    },
    specialButton: {
        backgroundColor: colors.primary,
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        // Elevation for shadow
        ...Platform.select({
            ios: {
                shadowColor: colors.primary,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    activeDot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: colors.primary,
        marginTop: 4,
    },
});
