import { View, Text } from "react-native";

import { globalStyles } from "@/styles/global-styles";

import ThemeText from "@/components/ThemeText";
import CalculatorBtn from "@/components/CalculatorBtn";
import { Colors } from "@/constants/Colors";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 30 }}>
        <ThemeText variant="h1">50 x 50</ThemeText>
        <ThemeText variant="h2">250</ThemeText>
      </View>

      {/* Botones */}
      <View style={globalStyles.row}>
        <CalculatorBtn
          label="C"
          blackText={true}
          color={Colors.lightGray}
          onPress={() => console.log("C")}
        />
        <CalculatorBtn
          label="+/-"
          blackText={true}
          color={Colors.lightGray}
          onPress={() => console.log("+/-")}
        />
        <CalculatorBtn
          label="del"
          blackText={true}
          color={Colors.lightGray}
          onPress={() => console.log("del")}
        />
        <CalculatorBtn
          label="/"
          color={Colors.orange}
          onPress={() => console.log("/")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label="7" onPress={() => console.log("7")} />
        <CalculatorBtn label="8" onPress={() => console.log("8")} />
        <CalculatorBtn label="9" onPress={() => console.log("9")} />

        <CalculatorBtn
          label="x"
          color={Colors.orange}
          onPress={() => console.log("x")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label="4" onPress={() => console.log("4")} />
        <CalculatorBtn label="5" onPress={() => console.log("5")} />
        <CalculatorBtn label="6" onPress={() => console.log("6")} />

        <CalculatorBtn
          label="-"
          color={Colors.orange}
          onPress={() => console.log("-")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label="1" onPress={() => console.log("1")} />
        <CalculatorBtn label="2" onPress={() => console.log("2")} />
        <CalculatorBtn label="3" onPress={() => console.log("3")} />

        <CalculatorBtn
          label="+"
          color={Colors.orange}
          onPress={() => console.log("+")}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn
          label="0"
          doubleSize={true}
          onPress={() => console.log("0")}
        />
        <CalculatorBtn label="." onPress={() => console.log(".")} />

        <CalculatorBtn
          label="="
          color={Colors.orange}
          onPress={() => console.log("=")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
