import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log('Pressed');
    }
    
    useLayoutEffect(() => { 
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon='star' color='white' onPress={headerButtonPressHandler} />
            }
        })
    }, [navigation, headerButtonPressHandler]); 

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients}></List>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps}></List>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    rootContainer: {
    marginBottom: 32
    },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "90%",
    },
    listOuterContainer: {
      alignItems: 'center'
  }
});
