import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.logo}>🎣 Fishstick</Text>
      <Text style={styles.tagline}>Your AI fishing companion</Text>
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainButtonText}>What should I use?</Text>
      </TouchableOpacity>
    </View>
  );
}

function DiscoverScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.pageTitle}>Global Feed</Text>
      <Text style={styles.subtitle}>See what anglers are catching worldwide</Text>
    </View>
  );
}

function LogScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.pageTitle}>Log a Catch</Text>
      <TouchableOpacity style={styles.modeButton}>
        <Text style={styles.modeButtonText}>🎣 Casual Mode</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.modeButton, styles.competitiveButton]}>
        <Text style={styles.modeButtonText}>🏆 Competitive Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

function LeaderboardScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.pageTitle}>🏆 Leaderboard</Text>
      <Text style={styles.subtitle}>Global Monthly Rankings</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.pageTitle}>My Profile</Text>
      <Text style={styles.subtitle}>Your stats and catch history</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#1A5276',
            tabBarInactiveTintColor: '#888',
            tabBarStyle: {
              backgroundColor: '#fff',
              borderTopWidth: 0.5,
              borderTopColor: '#ddd',
              height: 60,
              paddingBottom: 8,
            },
            headerStyle: {
              backgroundColor: '#1A5276',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ tabBarLabel: 'Home' }}
          />
          <Tab.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{ tabBarLabel: 'Discover' }}
          />
          <Tab.Screen
            name="Log"
            component={LogScreen}
            options={{ tabBarLabel: 'Log Catch' }}
          />
          <Tab.Screen
            name="Leaderboard"
            component={LeaderboardScreen}
            options={{ tabBarLabel: 'Rankings' }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ tabBarLabel: 'Profile' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1A5276',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A5276',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  mainButton: {
    backgroundColor: '#1A5276',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  mainButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modeButton: {
    backgroundColor: '#1A5276',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  competitiveButton: {
    backgroundColor: '#BA4A00',
  },
  modeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
