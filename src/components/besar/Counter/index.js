import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { IconButtonMin, IconButtonPlus } from "../../../assets";

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IconButtonMin />
      </TouchableOpacity>
      <Text style={styles.textCounter}>1</Text>
      <TouchableOpacity>
        <IconButtonPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textCounter: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});
