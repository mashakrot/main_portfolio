// AppBackground.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AppBackground = () => {
  return (
    <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e']}
      style={styles.container}
    >
      <View style={styles.glow1} />
      <View style={styles.glow2} />
      <View style={styles.content}>
        <Text style={styles.title}>Creative Energy</Text>
        <Text style={styles.subtitle}>Where Ideas Turn Into Code</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glow1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#ff6ec4',
    opacity: 0.3,
    top: 60,
    left: 40,
    shadowColor: '#ff6ec4',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 30,
  },
  glow2: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#7873f5',
    opacity: 0.25,
    bottom: 80,
    right: 30,
    shadowColor: '#7873f5',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 40,
  },
  content: {
    zIndex: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    marginTop: 8,
  },
});

export default AppBackground;
