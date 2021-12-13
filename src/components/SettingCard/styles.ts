import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 68,
    borderRadius: 10,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  settingTitle: {
    color: theme.colors.black,
    fontSize: 16,
    fontFamily: theme.fonts.title700,
  },
  settingDescription: {
    color: theme.colors.gray,
    fontSize: 12,
    fontFamily: theme.fonts.text400,
  },
  chevronContainer: {
    alignItems: 'center',
    marginLeft: -12,
  },
});
