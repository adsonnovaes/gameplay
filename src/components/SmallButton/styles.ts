import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  outline: {
    width: 148,
    height: 54,
    // backgroundColor: theme.colors.secondary100,

    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    textAlign: 'center',
  },
  iconWrapper: {
    width: 56,
    height: 56,

    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line
  },

  icon: {
    width: 24,
    height: 18
  }
});