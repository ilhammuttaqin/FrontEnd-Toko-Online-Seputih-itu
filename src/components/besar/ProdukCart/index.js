import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../../utils";

const ListProdukCart = ({ produk, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProdukDetail", { produk })}
      >
        <Image source={produk.gambar} style={styles.gambar} />
        <View style={styles.content}>
          <Text style={styles.textItem}>{produk.nama}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

//props detail produk
const ProdukCart = ({ products, navigation }) => {
  return (
    <>
      {products.map((produk) => {
        return (
          <ListProdukCart
            produk={produk}
            key={produk.id}
            navigation={navigation}
          />
        );
      })}
    </>
  );
};

export default ProdukCart;

const styles = StyleSheet.create({
  container: {
    width: 160,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    overflow: "hidden",
    marginRight: 20,
  },
  textItem: {
    fontSize: 16,
    color: "#121212",
    fontWeight: "bold",
    textAlign: "center",
  },
  gambar: {
    width: 160,
    height: 160,
    resizeMode: "cover",
  },
  content: {
    padding: 12,
  },
});
