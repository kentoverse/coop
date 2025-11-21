import React from 'react';
import { PaperProvider, MD3LightTheme, configureFonts } from 'react-native-paper';
import { TodoProvider } from '@/components/todoContext';
import SplashScreen from '@/components/splashScreent';

const fontConfig = {
  bodyLarge: { fontSize: 20, lineHeight: 22, letterSpacing: 0.5 },
};

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
};

export default function App() {
  return (
    <TodoProvider>
      <PaperProvider theme={theme}>
        <SplashScreen nextScreen="Profile" duration={3500} />
      </PaperProvider>
    </TodoProvider>
  );
}