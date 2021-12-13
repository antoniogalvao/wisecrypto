import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 32,
    borderRadius: 8,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  label: {
    color: theme.colors.white,
    fontSize: 12,
    fontFamily: theme.fonts.title700,
  },
});
