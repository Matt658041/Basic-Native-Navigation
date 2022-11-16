import { View, Text, Pressable } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import React from 'react'

export default function IconButton() {
  return (
      <Pressable>
          <Ionicons name='star' size={24} color='white' />
   </Pressable>
  )
}