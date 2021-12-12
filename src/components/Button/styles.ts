import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 42,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  title: {
    flex: 1,
    color: theme.colors.white,
    fontFamily: theme.fonts.title600,
    fontSize: 14,
    textAlign: 'center',
  },
});
