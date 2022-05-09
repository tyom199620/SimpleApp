import { StatusBar, Platform, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Colors from './constants/Colors';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {

    return (
      <SafeAreaProvider>
        <View style={{ height: Platform.OS === 'ios' ? getStatusBarHeight(true) : 0, backgroundColor: Colors.statusbar }}>
          <StatusBar backgroundColor={Colors.statusbar} />
        </View>
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }
}
