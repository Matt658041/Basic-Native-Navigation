import { View, FlatList, StyleSheet, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import React from "react";
import MealItem from "../components/MealItem";
//import { useRoute } from '@react-navigation/native';


export default function MealsOverviewScreen({ route }) {
  //const route = useRoute(); this is an alternative hook you can use for routing in a nested component
  //route.params
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

    function renderMealItem(itemData) {
        return <MealItem title={itemData.item.title} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
