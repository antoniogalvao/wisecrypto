import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  input: {
    width: '100%',
    height: 42,
    borderRadius: 8,
    borderColor: theme.colors.lightGreen,
    borderWidth: 1,
    backgroundColor: theme.colors.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: theme.fonts.text400,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 8,
  },
});
