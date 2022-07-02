import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { colors, numberWithCommas, responsiveHeight } from "../../utils";
import { DataUser, DataTransaksi } from "../../DataDummy";
import { CardAlamat, Gap, Tombol, Pilih } from "../../components";

export default class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keranjangPesan: DataTransaksi[0],
      users: DataUser,
      ekspedisi: [],
    };
  }
  render() {
    const { keranjangPesan, users, ekspedisi } = this.state;
    return (
      <View style={styles.pages}>
        <View style={styles.isi}>
          <Text style={styles.textBold}>Alamat Pengiriman</Text>
          <CardAlamat users={users} />
          <View style={styles.totalHarga}>
            <Text style={styles.textBold}>Sub Total :</Text>
            <Text style={styles.textBold}>
              Rp. {numberWithCommas(keranjangPesan.totalHarga)}
            </Text>
          </View>

          {/* Pilihan Ekspedisi */}
          <Pilih label={"Pilih Ekspedisi"} datas={ekspedisi} fontSize={15} />
          <Gap height={10} />
          <Text style={styles.textBold}>Biaya Ongkir :</Text>

          <View style={styles.ongkir}>
            <Text style={styles.text}>
              Untuk Berat : {keranjangPesan.berat} kg
            </Text>
            <Text style={styles.textBold}>Rp. {numberWithCommas(15000)}</Text>
          </View>
          <View style={styles.ongkir}>
            <Text style={styles.text}>Estimasi Waktu</Text>
            <Text style={styles.textBold}>2-3 Hari</Text>
          </View>
        </View>
        <View style={styles.footer}>
          {/* Total Harga  */}
          <View style={styles.totalHarga}>
            <Text style={styles.textBold}>Total Harga :</Text>
            <Text style={styles.textBold}>
              Rp. {numberWithCommas(keranjangPesan.totalHarga + 15000)}
            </Text>
          </View>

          {/* Tombol  */}
          <Tombol
            tittle="Bayar"
            type="text"
            fontSize={18}
            padding={responsiveHeight(15)}
            onPress={() => this.props.navigation.navigate("Checkout")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.mainBackground,
    paddingTop: 30,
    justifyContent: "space-between",
  },
  isi: {
    paddingHorizontal: 30,
  },
  textBold: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    fontWeight: "normal",
  },
  totalHarga: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  ongkir: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    paddingHorizontal: 30,
    backgroundColor: colors.primary,
    shadowColor: "#000",
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
});
