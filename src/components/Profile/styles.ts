import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  greeting: {
    fontFamily: theme.fonts.text500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight
  },
  containerSignOut: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10
  },
  containerButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outlineButton: {
    width: 152,
    height: 57,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: theme.colors.secondary30,
  },
  headerSignOut: {
    flexDirection: 'row',
  },
  textsContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading
  },
  witheText: {
    fontSize: 24,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading
  },
  primaryText: {
    fontSize: 24,
    fontFamily: theme.fonts.title700,
    color: theme.colors.primary
  }
})