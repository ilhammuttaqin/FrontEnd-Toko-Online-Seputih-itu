import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { CardKeranjang } from "../../kecil";

const ListKeranjang = ({ keranjangPesan }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style = {styles.container}>
        {keranjangPesan.map((pesan) => {
          return <CardKeranjang pesan={pesan} key={pesan.id} />;
        })}
      </View>
    </ScrollView>
  );
};

export default ListKeranjang;

const styles = StyleSheet.create({
    container:{
        marginVertical:10
    }
});
