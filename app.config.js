export default {
  name: 'Fishstick',
  slug: 'fishstick',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'light',
  splash: {
    backgroundColor: '#1A5276',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.fishstick.app',
    infoPlist: {
      NSLocationWhenInUseUsageDescription:
        'Fishstick uses your location to find fish species near you and verify competitive catches.',
      NSCameraUsageDescription:
        'Fishstick uses your camera to photograph your catches.',
      NSPhotoLibraryUsageDescription:
        'Fishstick accesses your photos to let you upload catch images.',
    },
  },
  android: {
    package: 'com.fishstick.app',
    permissions: [
      'ACCESS_FINE_LOCATION',
      'ACCESS_COARSE_LOCATION',
      'CAMERA',
      'READ_EXTERNAL_STORAGE',
    ],
  },
  plugins: [
    'expo-location',
    'expo-camera',
    'expo-image-picker',
  ],
};
