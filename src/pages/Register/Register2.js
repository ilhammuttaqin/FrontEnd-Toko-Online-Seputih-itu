import {
  Text,
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { Component } from "react";
import { colors, responsiveWidth } from "../../utils";
import {
  Gap,
  HeaderRegister,
  Pilih,
  TextInputan,
  Tombol,
} from "../../components";

export default class Register2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DataKota: [],
      DataProvinsi: [],
    };
  }
  render() {
    const { DataKota, DataProvinsi } = this.state;
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.page}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.pages}>
              <HeaderRegister
                onPress={() => navigation.goBack()}
                tittle={"Alamat"}
                subtittle={"Selamat datang di aplikasi Seputih.itu"}
              />

              <View style={styles.desc}>
                <View style={styles.wrapperCircle}>
                  <View style={styles.circleDisabled}></View>
                  <Gap width={10} />
                  <View style={styles.circlePrimary}></View>
                </View>
              </View>
              <Gap height={20} />
              <View style={styles.card}>
                <TextInputan label="Alamat" textarea />
                <Pilih label="Provinsi" datas={DataProvinsi} />
                <Pilih label="Kota" datas={DataKota} />

                <Gap height={25} />
                <Tombol
                  tittle="Continue"
                  type="text"
                  padding={10}
                  fontSize={18}
                  onPress={() => this.props.navigation.navigate("MainApp")}
                />
              </View>

              <Gap height={80} />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
  desc: {
    marginTop: 15,
    alignItems: "center",
  },
  card: {
    backgroundColor: colors.primary,
    marginHorizontal: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  wrapperCircle: {
    flexDirection: "row",
    marginTop: 10,
  },
  circlePrimary: {
    backgroundColor: colors.gray,
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    borderRadius: 10,
  },
  circleDisabled: {
    backgroundColor: colors.shadow,
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    color: colors.secondary,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 5,
  },
});
