import {StyleProp} from 'react-native';

export type TStyles<T extends string, S> = Partial<Record<T, StyleProp<S>>>;
