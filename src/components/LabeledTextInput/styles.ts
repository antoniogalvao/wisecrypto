import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginLeft: 1,
    textAlign: 'left',
    color: theme.colors.black,
    marginBottom: 8,
    fontSize: 14,
    fontFamily: theme.fonts.text500,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.lightGreen,
    backgroundColor: theme.colors.white,
    width: '100%',
    height: 42,
  },
});
