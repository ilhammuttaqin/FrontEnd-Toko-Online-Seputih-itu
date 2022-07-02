import { StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, responsiveHeight } from '../../../utils'

const CardKategori = ({kategori}) => {
  return (
  <TouchableOpacity style={styles.container}>
    <Image source={kategori.gambar} style= {styles.logo}/> 
  </TouchableOpacity>
  )
}

export default CardKategori

const styles = StyleSheet.create({
    logo:{
        width:responsiveHeight(64),
        height:responsiveHeight(64)
    },
    container:{
        
    }
})