import {  Text } from 'react-native'
import React from 'react'

export default function MealDetailScreen({ route }) {
    const mealId = route.params.mealId
  return (
    
      <Text>MealDetailScreen({mealId})</Text>
  
  )
}