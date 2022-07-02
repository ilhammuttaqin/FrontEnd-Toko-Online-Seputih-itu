import { Text, StyleSheet, View, ScrollView } from "react-native";
import React, { Component } from "react";
import { colors } from "../../utils";
import { Gap, KategoriList, ListHeadComponents, ProdukList } from "../../components";
import { DataKategori, DataProduk } from "../../DataDummy";

export default class Pesanan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: DataKategori,
      products: DataProduk,
    };
  }

  render() {
    const { categories, products } = this.state;
    const {navigation} = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ListHeadComponents navigation={navigation}/>
          <View style={styles.viewProduk}>
            <KategoriList categories={categories} />
          </View>
          {/* <View style={{ flex: 1 }}></View> */}
          <View style={styles.pilihProduk}>
            <ProdukList products={products} navigation={navigation}/>
          </View>
        <Gap height={64}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
  viewProduk: {
    marginBottom: 10,
  },
  pilihProduk: {
    marginTop: 10,
    marginHorizontal: 20,
  },
});
