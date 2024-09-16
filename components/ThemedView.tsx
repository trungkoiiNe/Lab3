import { View, type ViewProps } from 'react-native';
import { useTheme } from './ThemeProvider';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const { isDarkMode } = useTheme();
  const backgroundColor = isDarkMode ? darkColor : lightColor;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}