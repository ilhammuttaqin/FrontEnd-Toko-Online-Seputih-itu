import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

import { Logo } from "../../assets";
import { colors, responsiveHeight } from "../../utils";
import { Gap, TextInputan, Tombol } from "../../components";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.cardLogin}>
          <View style={styles.konten}>
            <TextInputan
              label="Email"
              placeholder={"masukan email"}
              fontSize={16}
            />
            <TextInputan
              label="Password"
              placeholder={"masukan password"}
              secureTextEntry={true}
              fontSize={16}
            />
            <Gap height={30} />
            <Tombol
              tittle="Login"
              type="text"
              padding={12}
              fontSize={16}
              onPress={() => this.props.navigation.navigate("Home")}
            />
            <Tombol
              tittle="Register"
              type="text"
              padding={12}
              fontSize={16}
              backgroundColor={"#F7F7D0"}
              onPress={() => this.props.navigation.navigate("Register")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
  logo: {
    alignItems: "center",
    marginTop: responsiveHeight(80),
    marginBottom: responsiveHeight(30),
  },
  cardLogin: {
    flex: 1,
    marginTop: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,

    backgroundColor: colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  konten: {
    padding: 30,
    marginTop: 10,
    marginHorizontal: 10,
  },
});
