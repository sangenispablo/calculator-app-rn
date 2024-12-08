import { View, Text } from "react-native";

import { globalStyles } from "@/styles/global-styles";

import ThemeText from "@/components/ThemeText";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText variant="h1">50 x 50</ThemeText>
      <ThemeText variant="h2">250</ThemeText>
    </View>
  );
};

export default CalculatorApp;
