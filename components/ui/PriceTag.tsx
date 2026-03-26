import { colors, fontFamilies, spacing } from '@/constants/tokens';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface PriceTagProps {
    amount: string;
    unit: string;
}

export default function PriceTag({ amount, unit }: PriceTagProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.amount}>{amount}</Text>
            <Text style={styles.unit}>{unit}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: spacing[2],
    },
    amount: {
        fontFamily: fontFamilies.displayBlack,
        fontSize: 18,
        color: colors.primary,
    },
    unit: {
        fontFamily: fontFamilies.bodyRegular,
        fontSize: 11,
        color: colors.primary,
        marginLeft: spacing[1],
    },
});
