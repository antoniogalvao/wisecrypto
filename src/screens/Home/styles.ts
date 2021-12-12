import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  header: {
    marginTop: getStatusBarHeight() + 16,
    marginBottom: 16,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 20,
  },
  greeting: {},
  greetingText: {
    color: theme.colors.gray2,
    fontSize: 14,
    fontFamily: theme.fonts.title600,
    lineHeight: 18,
  },
  username: {
    color: theme.colors.black,
    fontSize: 20,
    fontFamily: theme.fonts.title700,
    lineHeight: 22,
  },
  bellContainer: {
    justifyContent: 'center',
    marginRight: 4,
  },
  portfolio: {
    width: '100%',
    height: 112,
    backgroundColor: theme.colors.success,
    borderRadius: 10,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  portfolioTitle: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fonts.title600,
    lineHeight: 20,
  },
  portfolioValue: {
    color: theme.colors.white,
    fontSize: 32,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
  },
  portfolioBox: {
    width: 73,
    height: 32,
    borderRadius: 8,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  portfolioArrow: {
    marginLeft: 2,
    color: theme.colors.success,
  },
  portfolioPercentage: {
    color: theme.colors.success,
    fontSize: 12,
    fontFamily: theme.fonts.title700,
    marginRight: 4,
  },
  assetsContainer: {
    paddingVertical: 24,
    width: '100%',
  },
  assetsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.black,
    fontSize: 14,
    fontFamily: theme.fonts.title600,
    marginBottom: 8,
  },
  subtitle: {
    color: theme.colors.primary,
    fontSize: 12,
    fontFamily: theme.fonts.title700,
  },
  watchlistContainer: {
    width: '100%',
  },
  watchlistHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
