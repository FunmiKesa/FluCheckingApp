import * as React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import App from "./src/App";
import colors from "./assets/Colors";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: "#f1c40f"
  }
};
const Main = () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};
export default Main;
