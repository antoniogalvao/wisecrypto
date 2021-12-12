import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    height: 88,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginRight: 16,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageBox: {
    backgroundColor: theme.colors.light,
    borderRadius: 10,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  image: {
    width: 40,
    height: 40,
  },
  label: {},
  code: {
    color: theme.colors.black,
    fontSize: 20,
    fontFamily: theme.fonts.title700,
  },
  name: {
    color: theme.colors.gray,
    fontSize: 16,
    fontFamily: theme.fonts.text400,
  },
  unitValue: {
    color: theme.colors.black,
    fontSize: 16,
    fontFamily: theme.fonts.title700,
  },
  increaseBox: {
    backgroundColor: theme.colors.success,
    borderRadius: 8,
    width: 55,
    height: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    alignSelf: 'flex-end',
  },
  arrowIcon: {
    color: theme.colors.white,
  },
  rateIncreaseText: {
    color: theme.colors.white,
    fontSize: 10,
    fontFamily: theme.fonts.title700,
  },
});
