import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProfileBio() {
  return (
    <View style={styles.bio}>
      <Text style={styles.name}>İdris Akan</Text>
      <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veritatis, vel tempore cumque rerum fuga temporibus maxime...</Text>
      <Text style={styles.link}>Link goes here</Text>
      <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.7}>
        <Text style={styles.editProfileText}>
          Edit profil
        </Text>
      </TouchableOpacity>
    </View>
 );
}

const styles = StyleSheet.create({
    bio:{
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    name: {
      fontWeight: '700',
      color: '#000000'
    },
    description:{
      marginVertical: 5,
      color: '#000000'
    },
    link:{
      fontWeight: '400',
      color: '#004C8B'
    },
    editProfileButton:{
      borderColor: '#CBCBCB',
      borderWidth:1,
      marginVertical:10,
      alignItems:'center',
      paddingVertical: 5,
      borderRadius:5,

    },
    editProfileText:{
      fontWeight: '700',
      color: '#000000',
    },



})