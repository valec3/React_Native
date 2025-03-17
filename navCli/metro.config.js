const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  // Add your custom Metro configuration here
  resolver: {
    // Example: Add additional file extensions to handle
    assetExts: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json'],
  },
  transformer: {
    // Example: Enable inline requires for better performance
    inlineRequires: true,
  },
};

// Merge the default configuration with your custom configuration
const mergedConfig = mergeConfig(getDefaultConfig(__dirname), config);

// Wrap the merged configuration with Reanimated's Metro config
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
