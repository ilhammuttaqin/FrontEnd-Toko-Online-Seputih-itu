import { Text, StyleSheet, View, ScrollView } from "react-native";
import React, { Component } from "react";
import { DataUser } from "../../DataDummy";
import { colors } from "../../utils";
import { Pilih, TextInputan, Tombol } from "../../components";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DataProvinsi: [],
      DataKota: [],
      profils: DataUser,
    };
  }
  render() {
    const { DataKota, DataProvinsi, profils } = this.state;
    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInputan label="Nama" value={profils.nama} fontSize={16} />
          <TextInputan label="Email" value={profils.email} fontSize={16}/>
          <TextInputan label="No. Handphone" value={profils.nomerHp} fontSize={16}/>
          <TextInputan label="Alamat" value={profils.alamat} textarea fontSize={16}/>

          <Pilih datas={DataProvinsi} label={"Provinsi"} fontSize={16}/>
          <Pilih datas={DataKota} label={"Kota"} fontSize={16}/>
          <TextInputan
            label="Password"
            value={profils.password}
            secureTextEntry={true}
            fontSize={16}
          />

          <View style={styles.content}>
            <Tombol type={"text"} tittle={"Update Profile"} padding={12} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.mainBackground,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  content:{
    marginVertical:8,
    marginTop:15,
  },
});
