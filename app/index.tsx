import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { calculate } from "./calculate";
import { styles } from "./styles";

export default function Index() {
  const [catName, setCatName] = useState<string>("");
  const [catsYears, setCatsYears] = useState<number>(0);
  const [catsMonths, setCatsMonths] = useState<number>(0);
  const [ageInHumanYears, setAgeInHumanYears] = useState<number>(0);

  const onCalculate = () => {
    const ageInHumanYears = calculate(catsYears, catsMonths);
    return setAgeInHumanYears(ageInHumanYears);
  };

  const onReset = () => {
    setCatName("");
    setCatsYears(0);
    setCatsMonths(0);
    setAgeInHumanYears(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cat age calculator</Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.nameInput]}
          placeholder="Cat's name"
          onChangeText={(name) => setCatName(name)}
          value={catName}
          textContentType="name"
        />
        <Text style={styles.text}>What's your cat name?</Text>
      </View>
      <View>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.ageInput]}
            placeholder="Years"
            value={catsYears.toString()}
            onChangeText={(age) => {
              const parsedAge = parseInt(age, 10);

              if (isNaN(parsedAge)) {
                return setCatsYears(0);
              }

              return setCatsYears(parsedAge);
            }}
            keyboardType="number-pad"
          />

          <TextInput
            style={[styles.input, styles.ageInput, { marginLeft: 10 }]}
            placeholder="Months"
            value={catsMonths.toString()}
            onChangeText={(age) => {
              const parsedAge = parseInt(age, 10);

              if (isNaN(parsedAge)) {
                return setCatsMonths(0);
              }

              return setCatsMonths(parsedAge);
            }}
            keyboardType="number-pad"
          />
        </View>
        <Text style={styles.text}>What's your cat age?</Text>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.calculateButton} onPress={() => onCalculate()}>
          <Text style={styles.buttonText}>Calculate</Text>
        </Pressable>
        {ageInHumanYears > 0 && (
          <Pressable
            style={[styles.calculateButton, { marginLeft: 10 }]}
            onPress={() => onReset()}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
        )}
      </View>

      {ageInHumanYears > 0 && (
        <View style={styles.resultContainer}>
          <Text style={styles.text}>
            {catName} is {ageInHumanYears} old in human years
          </Text>
        </View>
      )}
    </View>
  );
}
