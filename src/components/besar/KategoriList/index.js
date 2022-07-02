import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../../utils";
import { CardKategori } from "../../kecil";

const KategoriList = ({ categories }) => {
  return (
    <View style={styles.container}>
      {categories.map((kategori) => {
        return <CardKategori kategori={kategori} key={kategori.id} />;
      })}
    </View>
  );
};

export default KategoriList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 30,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
