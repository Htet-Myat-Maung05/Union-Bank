import RootNavigation from '@/navigation';
import { persistor, store } from '@/redux/store';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <KeyboardProvider>
            <RootNavigation />
          </KeyboardProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;