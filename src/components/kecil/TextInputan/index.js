import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { colors } from "../../../utils";

const TextInputan = ({
  textarea,
  width,
  height,
  fontSize,
  placeholder,
  label,
  value,
  secureTextEntry,
  keyboardType,
}) => {
  if (textarea) {
    return (
      <View style={styles.container}>
        <Text style={styles.label(fontSize)}>{label} :</Text>
        <TextInput
          style={styles.inputTextArea(fontSize)}
          multiline={true}
          numberOfLines={3}
          value={value}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <TextInput
        style={styles.input(width, height, fontSize)}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default TextInputan;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: (fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    marginBottom:5,
    fontWeight: "normal",
  }),
  input: (width, height, fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    fontWeight: "normal",
    width: width,
    height: height,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    paddingVertical: 5,
    paddingHorizontal: 10,
  }),
  inputTextArea: (fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    fontWeight: "normal",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlignVertical: "top",
  }),
});
