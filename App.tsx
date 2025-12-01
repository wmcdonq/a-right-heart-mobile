import React, { useState, useRef } from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  ActivityIndicator, 
  View,
  StatusBar,
  Platform,
  BackHandler
} from 'react-native';
import { WebView } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';

// ============================================
// CONFIGURATION - UPDATE THIS WITH YOUR URL
// ============================================
const APP_URL = 'https://YOUR-APP-NAME.replit.app';
// ============================================

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const webViewRef = useRef<WebView>(null);

  React.useEffect(() => {
    if (Platform.OS === 'android') {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        if (webViewRef.current) {
          webViewRef.current.goBack();
          return true;
        }
        return false;
      });
      return () => backHandler.remove();
    }
  }, []);

  const handleLoadEnd = () => {
    setIsLoading(false);
    SplashScreen.hideAsync();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#D9A87C" />
      
      <WebView
        ref={webViewRef}
        source={{ uri: APP_URL }}
        style={styles.webview}
        onLoadEnd={handleLoadEnd}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        allowsBackForwardNavigationGestures={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        originWhitelist={['https://*', 'http://*']}
        renderLoading={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#D9A87C" />
          </View>
        )}
      />

      {isLoading && (
        <View style={styles.splashOverlay}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9A87C',
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFBF7',
  },
  splashOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#D9A87C',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
