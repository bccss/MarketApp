import { spacing } from '@/constants/tokens';
import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface TwoColumnGridProps {
    items: any[];
    renderItem: (item: any) => ReactNode;
}

export default function TwoColumnGrid({ items, renderItem }: TwoColumnGridProps) {
    const left = items.filter((_, i) => i % 2 === 0);
    const right = items.filter((_, i) => i % 2 !== 0);

    return (
        <View style={styles.container}>
            <View style={styles.column}>
                {left.map((item, index) => (
                    <View key={item.id || index}>
                        {renderItem(item)}
                    </View>
                ))}
            </View>
            <View style={styles.column}>
                {right.map((item, index) => (
                    <View key={item.id || index}>
                        {renderItem(item)}
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: spacing[3],
    },
    column: {
        flex: 1,
    },
});
