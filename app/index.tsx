import { Stack } from 'expo-router';
import { SheetManager } from 'react-native-actions-sheet';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Button onPress={() => SheetManager.show('test-sheet')} title="Show Details" />
      </Container>
    </>
  );
}
