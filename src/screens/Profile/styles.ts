import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: getStatusBarHeight() + 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  username: {
    color: theme.colors.black,
    fontSize: 24,
    fontFamily: theme.fonts.title700,
  },
  header: {
    backgroundColor: theme.colors.success,
    marginVertical: 24,
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  balanceTitle: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fonts.text400,
  },
  accountCode: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fonts.title800,
  },
  amount: {
    color: theme.colors.white,
    fontSize: 32,
    fontFamily: theme.fonts.title700,
  },
  headerAppend: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    width: '78%',
    height: 66,
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -42,
    marginBottom: 24,
  },
  headerOption: {
    alignItems: 'center',
    flex: 2,
  },
  headerLabel: {
    color: theme.colors.primary20,
    fontSize: 14,
    fontFamily: theme.fonts.title600,
  },
  headerDivider: {
    width: 35,
    borderWidth: 1,
    flex: 1,
    borderColor: theme.colors.primary,
    transform: [{ rotate: '90deg' }],
  },
  settingsContainer: {
    width: '100%',
  },
  settingsHeader: {
    color: theme.colors.black,
    fontSize: 16,
    fontFamily: theme.fonts.title600,
    marginBottom: 12,
  },
});
