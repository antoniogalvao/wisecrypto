import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 16,
    paddingHorizontal: 15,
  },
  header: {},
  badgeList: {
    marginVertical: 24,
  },
});