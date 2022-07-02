import { StyleSheet, TextInput, View } from "react-native";
import React, { Component } from "react";
import { colors } from "../../../utils";
import { Search } from "../../../assets";
import { Tombol, Gap } from "../../kecil";

export class SearchComponents extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.WrapperSection}>
        <View style={styles.SectionSearch}>
          <Search style={styles.iconSearch} />
          <TextInput placeholder="Cari Produk " style={styles.InputText} />
        </View>
        <Gap width={10} />
        <Tombol
          icon="keranjang"
          totalkeranjang={10}
          padding={10}
          onPress={() => navigation.navigate('KeranjangPesanan')}
        />
      </View>
    );
  }
}

export default SearchComponents;

const styles = StyleSheet.create({
  WrapperSection: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: "row",
  },
  SectionSearch: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.8,

    elevation: 2,
  },

  InputText: {
    fontSize: 16,
    marginLeft: 10,
    width:185,
  },
});
