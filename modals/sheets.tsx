import { SheetDefinition, registerSheet } from 'react-native-actions-sheet';
import TestSheet from './TestSheet';

registerSheet('test-sheet', TestSheet);

declare module 'react-native-actions-sheet' {
  interface Sheets {
    'test-sheet': SheetDefinition;
  }
}

export {};
