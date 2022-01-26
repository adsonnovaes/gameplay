import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 550
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  }
})