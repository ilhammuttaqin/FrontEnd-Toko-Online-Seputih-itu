import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { AHA, IconBack, ShoppingCart } from "../../assets";
import { colors, numberWithCommas } from "../../utils";
import { Tombol, Gap, Counter } from "../../components";
import { useNavigation } from "@react-navigation/native";

export default class ProdukDetail extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      produk : this.props.route.params.produk,
      image : this.props.route.params.produk.gambar
    }
  }
  render() {
    const {navigation} = this.props;
    const {produk, image}= this.state;
    return (
      <View style={styles.container}>
        <ImageBackground source={produk.gambar} style={styles.gambar}>
          <View style ={styles.iconContainer}>
            <TouchableOpacity style={styles.back} onPress={()=> navigation.goBack()}>
              <IconBack />
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.back}>
              <ShoppingCart />
            </TouchableOpacity> */}
          </View>
        </ImageBackground>
        <View style={styles.konten}>
          <View style={styles.mainKonten}>
            <View style={styles.containerProduk}>
              <View>
                <Text style={styles.tittleProduk}>{produk.nama}</Text>
                <Text style={styles.tittleHarga}>Rp.{numberWithCommas(produk.harga)}</Text>
              </View>
              <Counter />
            </View>
            <Gap height={15} />
            <Text style={styles.desc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
            <Gap height={16} />
            <Text style={styles.label}>Komposisi</Text>
            <Text style={styles.desc}>Detail Komposisi</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.stokContainer}>
              <Text style={styles.labelTotal}>Total Stok</Text>
              <Text style={styles.descStok}>{produk.stok}</Text>
            </View>
            <View style={styles.button}>
              <Tombol
                type="text"
                tittle="Masukan Keranjang"
                fontSize={14}
                padding={14}
                style={styles.buttonText}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gambar: {
    height: 330,
    paddingTop: 26,
    paddingLeft: 22,
    paddingRight:22,
  },
  back: {
    backgroundColor: colors.white,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  
  konten: {
    backgroundColor: colors.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 30,
    paddingHorizontal: 26,
    flex: 1,
  },
  mainKonten: {
    flex: 1,
  },
  tittleProduk: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tittleHarga: {
    fontSize: 24,
    color: colors.secondary,
  },
  containerProduk: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  desc: {
    textAlign: "justify",
    fontSize: 14,
    color: colors.gray,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  button: {
    width: 168,
  },
  buttonText: {
    fontSize: 18,
  },
  stokContainer: {
    flex: 1,
  },
  labelTotal: {
    fontSize: 14,
    marginTop: -10,
    fontWeight: "bold",
  },
  descStok: {
    fontSize: 20,
  },
});
