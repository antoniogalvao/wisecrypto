import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    height: 120,
    width: 190,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginRight: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  imageContainer: {
    borderRadius: 10,
    backgroundColor: theme.colors.light,
    width: 40,
    height: 40,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 28,
    height: 28,
  },
  currencyCode: {
    color: theme.colors.black,
    fontSize: 16,
    fontFamily: theme.fonts.title700,
  },
  currencyName: {
    color: theme.colors.gray,
    fontSize: 10,
    fontFamily: theme.fonts.text400,
  },
  increaseBox: {
    backgroundColor: theme.colors.success,
    borderRadius: 8,
    width: 55,
    height: 22,
    paddingHorizontal: 4,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    color: theme.colors.white,
  },
  rateIncreaseText: {
    color: theme.colors.white,
    fontSize: 10,
    fontFamily: theme.fonts.title700,
  },
  divider: {
    height: 0.3,
    width: '100%',
    backgroundColor: theme.colors.gray2,
    marginVertical: 8,
    alignSelf: 'center',
  },
  portfolio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  portfolioLabel: {
    color: theme.colors.gray2,
    fontSize: 10,
    fontFamily: theme.fonts.text400,
  },
  portfolioValue: {
    color: theme.colors.black,
    fontSize: 14,
    fontFamily: theme.fonts.title700,
  },
  currencyAmount: {
    color: theme.colors.gray,
    fontSize: 10,
    fontFamily: theme.fonts.title700,
  },
});
