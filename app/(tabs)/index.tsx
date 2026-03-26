import BottomNavBar from '@/components/ui/BottomNavBar';
import CategoryFilterBar from '@/components/ui/CategoryFilterBar';
import HeroBanner from '@/components/ui/HeroBanner';
import ServiceCard from '@/components/ui/ServiceCard';
import TopBar from '@/components/ui/TopBar';
import TwoColumnGrid from '@/components/ui/TwoColumnGrid';
import { colors, spacing } from '@/constants/tokens';
import { fetchCategories, fetchServices } from '@/hooks/useMarketData';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';

export default function HomePage() {
  const [services, setServices] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Initial fetch
    fetchCategories().then(setCategories);
    fetchServices().then(setServices);
  }, []);

  useEffect(() => {
    // Refetch services when category changes
    fetchServices(activeCategory).then(setServices);
  }, [activeCategory]);

  const handleMenuPress = () => console.log('Menu pressed');
  const handleCartPress = () => console.log('Cart pressed');
  const handleCtaPress = () => console.log('Hero CTA pressed');
  const handleBookPress = (id: string) => console.log(`Book pressed for service ${id}`);
  const handleTabChange = (tab: string) => console.log(`Tab changed to ${tab}`);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TopBar
        logoText="HEIGHTS EXCHANGE"
        onMenuPress={handleMenuPress}
        onCartPress={handleCartPress}
        cartCount={2}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header section with lower background depth */}
        <View style={styles.headerSection}>
          <HeroBanner
            badge="COLLEGE ESSENTIALS"
            headline="Your Campus, Simplified."
            subtitle="Book trusted student services in seconds. From organic chem tutoring to laundry pick-up."
            ctaLabel="EXPLORE SERVICES"
            onCtaPress={handleCtaPress}
            backgroundImage={{ uri: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800&q=80' }}
          />

          <CategoryFilterBar
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </View>

        {/* Main product feed on default background */}
        <View style={styles.feedSection}>
          <TwoColumnGrid
            items={services}
            renderItem={(item) => (
              <ServiceCard
                key={item.id}
                {...item}
                onBook={() => handleBookPress(item.id)}
              />
            )}
          />
        </View>
      </ScrollView>

      <BottomNavBar
        activeTab="home"
        onTabChange={handleTabChange}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 100, // Room for BottomNavBar
  },
  headerSection: {
    backgroundColor: colors.surfaceContainerLow,
    padding: spacing[4],
  },
  feedSection: {
    backgroundColor: colors.background,
    padding: spacing[4],
  },
});
