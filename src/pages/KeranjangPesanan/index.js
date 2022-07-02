import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { DataTransaksi } from "../../DataDummy";
import { ListKeranjang, Tombol } from "../../components";
import { colors, numberWithCommas, responsiveHeight } from "../../utils";

export default class KeranjangPesanan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keranjangPesan: DataTransaksi[0],
    };
  }
  render() {
    const { keranjangPesan } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.page}>
        <ListKeranjang keranjangPesan={keranjangPesan.transaksi} />
        <View style={styles.footer}>
          <View style={styles.totalHarga}>
          <Text style={styles.textBold}>Sub Total :</Text>
            <Text style={styles.textBold}>Rp. {numberWithCommas(keranjangPesan.totalHarga)}</Text>
          </View>
          <Tombol
            tittle="Pembayaran"
            type="text"
            fontSize={18}
            padding={responsiveHeight(15)}
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
  footer: {
    paddingHorizontal: 30,
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 11,
    paddingBottom: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  totalHarga: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20
  },
  textBold: {
    fontSize: 20,
    fontWeight:'bold'
}
});
