import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import stories from '../../../data/stories';
import Story from './Story';

export default function Stories() {
  return (
    <View style={styles.stories}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {stories.map((story => (
        <Story key={story.id} story={story} />
      )))}
       </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  stories:{
    paddingHorizontal:10,
  },
  });