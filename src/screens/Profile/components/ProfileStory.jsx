import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProfileStory() {
  return (
    <ScrollView horizontal style={styles.stories} showsHorizontalScrollIndicator={false}>
     
        <View style={styles.story}>
            <View
            style={{
                borderColor:'#DCDCDC',
                borderWidth:1,
                width:70,
                height:70,
                borderRadius:35,
                padding:5,
                alignItems: 'center',
                justifyContent:'center',
            }}
            >
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK1VPSNAkcALeci55Zd3npwbCZs3AFeslDZg&s'}} style={styles.storyImage}/>
            </View>
            <Text style={styles.storyLabel}>Story 1</Text>
        </View>
        <View style={styles.story}>
            <View
            style={{
                borderColor:'#DCDCDC',
                borderWidth:1,
                width:70,
                height:70,
                borderRadius:35,
                padding:5,
                alignItems: 'center',
                justifyContent:'center',
            }}
            >
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxiJP-703itjr_TSscST_m5Oz6L8UdlX2ZBQ&s'}} style={styles.storyImage}/>
            </View>
            <Text style={styles.storyLabel}>Story 2</Text>
        </View>
        <View style={styles.story}>
            <View
            style={{
                borderColor:'#DCDCDC',
                borderWidth:1,
                width:70,
                height:70,
                borderRadius:35,
                padding:5,
                alignItems: 'center',
                justifyContent:'center',
            }}
            >
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC3JDZeHLj_yQ7Qtxae9usDMojgCUpn593QXY1fNh9yNx_pgXv5XHaNSBavi3EQF5G3eQ&usqp=CAU'}} style={styles.storyImage}/>
            </View>
            <Text style={styles.storyLabel}>Story 3</Text>
        </View>
        <View style={styles.story}>
            <View
            style={{
                borderColor:'#DCDCDC',
                borderWidth:1,
                width:70,
                height:70,
                borderRadius:35,
                padding:5,
                alignItems: 'center',
                justifyContent:'center',
            }}
            >
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuGLXxSSqXjUF6QPsuEtZ0gepTNY3A1hiKA&s'}} style={styles.storyImage}/>
            </View>
            <Text style={styles.storyLabel}>Story 4</Text>
        </View>
        <View style={styles.story}>
            <View
            style={{
                borderColor:'#DCDCDC',
                borderWidth:1,
                width:70,
                height:70,
                borderRadius:35,
                padding:5,
                alignItems: 'center',
                justifyContent:'center',
            }} >
                <TouchableOpacity style={styles.newStoryButton}>
                    <Text style={styles.plusSign}>+</Text>
                </TouchableOpacity>
            
            </View>
            <Text style={styles.storyLabel}>Story 5</Text>
        </View>
       
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    stories:{
        paddingHorizontal:15,
    },
    story:{
        marginRight:10,
        alignItems:'center'
    },   
storyImage: {
  width:60,
  height:60,
  borderRadius:30,
},
storyLabel:{
    color: '#000000',
    marginTop: 3,
},
plusSign: {
    fontSize:40,
},
newStoryButton:{
justifyContent:'center',
alignItems:'center,'
},
})