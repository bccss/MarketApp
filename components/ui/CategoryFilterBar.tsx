import { colors, fontFamilies, radius, spacing } from '@/constants/tokens';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Category {
    id: string;
    label: string;
}

interface CategoryFilterBarProps {
    categories: Category[];
    activeCategory: string;
    onSelect: (id: string) => void;
}

export default function CategoryFilterBar({
    categories,
    activeCategory,
    onSelect,
}: CategoryFilterBarProps) {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {categories.map((category) => {
                    const isActive = activeCategory === category.id;
                    return (
                        <TouchableOpacity
                            key={category.id}
                            onPress={() => onSelect(category.id)}
                            activeOpacity={0.7}
                            style={[
                                styles.pill,
                                { backgroundColor: isActive ? colors.onBackground : colors.surfaceContainerLow }
                            ]}
                        >
                            <Text
                                style={[
                                    styles.label,
                                    { color: isActive ? colors.background : colors.onSurface }
                                ]}
                            >
                                {category.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: spacing[4],
    },
    scrollContent: {
        paddingHorizontal: spacing[4],
        gap: spacing[2],
    },
    pill: {
        paddingVertical: spacing[2],
        paddingHorizontal: spacing[4],
        borderRadius: radius.full,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontFamily: fontFamilies.bodySemiBold,
        fontSize: 11,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
});
