import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardProduk } from '../../kecil';

const ProdukList = ({products, navigation}) => {
  return (
    <View style={styles.container}>
       {products.map((produk) => {
        return <CardProduk produk={produk} key={produk.id} navigation={navigation}/>;
      })}
    </View>
  )
}

export default ProdukList

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    
    
  },

})