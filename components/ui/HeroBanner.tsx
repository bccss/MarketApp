import { colors, fontFamilies, radius, spacing } from '@/constants/tokens';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import PillBadge from './PillBadge';
import PillButton from './PillButton';

interface HeroBannerProps {
    badge: string;
    headline: string;
    subtitle: string;
    ctaLabel: string;
    onCtaPress: () => void;
    backgroundImage: ImageSourcePropType;
}

export default function HeroBanner({
    badge,
    headline,
    subtitle,
    ctaLabel,
    onCtaPress,
    backgroundImage,
}: HeroBannerProps) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={backgroundImage}
                style={styles.backgroundImage}
                imageStyle={styles.imageStyle}
            >
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={styles.gradient}
                >
                    <View style={styles.content}>
                        <PillBadge label={badge} variant="cream" />

                        <Text style={styles.headline}>{headline}</Text>
                        <Text style={styles.subtitle}>{subtitle}</Text>

                        <View style={styles.ctaContainer}>
                            <PillButton
                                label={ctaLabel}
                                variant="filled"
                                onPress={onCtaPress}
                            />
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        borderRadius: radius.card,
        overflow: 'hidden',
        marginBottom: spacing[4],
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    imageStyle: {
        borderRadius: radius.card,
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        padding: spacing[5],
    },
    content: {
        gap: spacing[2],
    },
    headline: {
        fontFamily: fontFamilies.displayBlack,
        fontSize: 28,
        color: colors.onPrimary,
        marginTop: spacing[2],
        lineHeight: 32,
    },
    subtitle: {
        fontFamily: fontFamilies.bodyRegular,
        fontSize: 14,
        color: colors.onPrimary,
        opacity: 0.9,
        marginBottom: spacing[2],
    },
    ctaContainer: {
        alignSelf: 'flex-start',
        marginTop: spacing[2],
    },
});
