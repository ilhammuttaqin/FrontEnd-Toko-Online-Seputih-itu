import { Text, StyleSheet, View, ScrollView } from "react-native";
import React, { Component } from "react";
import {
  HeaderComponents,
  ProdukCart,
  SearchComponents,
} from "../../components";
import { colors } from "../../utils";
import TabViewer from "../../components/besar/TabViewer";
import { DataKategori, DataProduk } from "../../DataDummy";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: DataKategori,
      products: DataProduk,
    };
  }

  render() {
    const { categories, products } = this.state;
    const { navigation } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderComponents />
          <SearchComponents navigation={navigation} />
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.ProdukCartContainer}>
                <ProdukCart products={products} navigation={navigation} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.TabContainer}>
            <TabViewer />
          </View>
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
  ProdukCartContainer: {
    flexDirection: "row",
    marginVertical: 15,
    marginLeft: 30,
    marginRight: 13,
    marginBottom: 18,
  },
  TabContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    flex: 1,
  },
});
