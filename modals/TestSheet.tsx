import ActionSheet, { SheetProps } from 'react-native-actions-sheet';
import { View, Text } from 'react-native';

export default function TestSheet({ sheetId }: SheetProps<'test-sheet'>) {
  return (
    <ActionSheet id={sheetId} containerStyle={{ minHeight: 300 }}>
      <View>
        <Text>Hello NativeWind</Text>
      </View>
    </ActionSheet>
  );
}
