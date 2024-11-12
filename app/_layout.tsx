import '../global.css';
import { SheetProvider } from 'react-native-actions-sheet';
import '../modals/sheets';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <SheetProvider>
      <Stack />
    </SheetProvider>
  );
}
