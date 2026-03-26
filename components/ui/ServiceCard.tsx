import { colors, fontFamilies, radius, spacing } from '@/constants/tokens';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import PillButton from './PillButton';
import PriceTag from './PriceTag';
import ProviderInfo from './ProviderInfo';
import VerifiedBadge from './VerifiedBadge';

interface ServiceCardProps {
    image: ImageSourcePropType;
    isVerified: boolean;
    title: string;
    price: string;
    priceUnit: string;
    providerName: string;
    onBook: () => void;
}

export default function ServiceCard({
    image,
    isVerified,
    title,
    price,
    priceUnit,
    providerName,
    onBook,
}: ServiceCardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
                {isVerified && <VerifiedBadge />}
            </View>

            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={2}>
                    {title}
                </Text>

                <PriceTag amount={price} unit={priceUnit} />
                <ProviderInfo name={providerName} />

                <View style={styles.buttonContainer}>
                    <PillButton
                        label="BOOK NOW"
                        variant="outlined"
                        onPress={onBook}
                        fullWidth
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.surfaceContainerLowest,
        borderRadius: radius.card,
        padding: spacing[4],
        marginBottom: spacing[4],
        // Shadow for subtle depth (not explicitly requested but fits premium look)
        shadowColor: colors.onSurface,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    imageContainer: {
        borderRadius: radius.image,
        overflow: 'hidden',
        aspectRatio: 4 / 3,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    content: {
        marginTop: spacing[3],
    },
    title: {
        fontFamily: fontFamilies.displayBold,
        fontSize: 14,
        color: colors.onSurface,
        lineHeight: 20,
    },
    buttonContainer: {
        marginTop: spacing[4],
    },
});
