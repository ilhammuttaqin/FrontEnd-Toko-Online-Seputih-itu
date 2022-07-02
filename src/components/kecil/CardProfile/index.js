import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { IconNext } from "../../../assets";
import { colors, responsiveHeight } from "../../../utils";

const CardProfile = ({ profil, navigation }) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(profil.halaman)}>
      <View style={styles.container}>
        <View style={styles.content}>
          {profil.gambar}
          <Text style={styles.text}>{profil.nama}</Text>
        </View>
        <IconNext />
      </View>
    </TouchableOpacity>
  );
};

export default CardProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // paddingHorizontal: 24,
    // paddingVertical: 8,
    marginTop: 18,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    borderColor: colors.border,
    borderWidth: 1,
    marginHorizontal:13,
    padding: responsiveHeight(18),
  },
  content:{
    flexDirection:'row',
    alignItems:'center'
  },
  text: {
    fontSize:16,
    fontWeight:'bold',
    marginLeft:18,
  },
});
