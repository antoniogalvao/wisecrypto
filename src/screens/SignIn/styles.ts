import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
    alignItems: 'center',
  },
  image: {
    width: 185,
    height: 64,
    marginTop: 48,
  },
  content: {
    marginTop: 72,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    color: theme.colors.black,
    fontSize: 32,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
  },
  subtitle: {
    color: theme.colors.primary,
    fontSize: 14,
    fontFamily: theme.fonts.title600,
  },
  form: {
    marginTop: 42,
    paddingHorizontal: 15,
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
    width: 360,
    height: 42,
  },
  forgotPassword: {
    marginTop: 32,
    color: theme.colors.warning,
    fontSize: 12,
    fontFamily: theme.fonts.title600,
    alignSelf: 'center',
  },
  register: {
    color: theme.colors.primary,
    fontSize: 12,
    fontFamily: theme.fonts.title600,
    alignSelf: 'center',
  },
});
