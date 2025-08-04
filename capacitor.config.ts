/**
 * Capacitor Configuration File
 * 
 * This file configures the Capacitor platform for iOS and Android deployment.
 * It enables the app to run natively on mobile devices with hot-reload capability.
 */

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.2b148da0ca6f4559a593c4cdf3b20925',
  appName: 'shop-reel-connect',
  webDir: 'dist',
  bundledWebRuntime: false,
  
  // Enable hot-reload for development from sandbox
  server: {
    url: "https://2b148da0-ca6f-4559-a593-c4cdf3b20925.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  
  // iOS specific configuration
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#000000',
    allowsLinkPreview: false,
    scrollEnabled: true,
    preferredContentMode: 'mobile'
  },
  
  // Android specific configuration
  android: {
    backgroundColor: '#000000',
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true
  },
  
  // Global plugins configuration
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#000000",
      androidSplashResourceName: "splash",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true
    },
    StatusBar: {
      style: "DARK",
      backgroundColor: "#000000"
    }
  }
};

export default config;