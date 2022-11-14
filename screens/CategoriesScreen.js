import { FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {

  function pressHandler() {

  }

  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
  );
}

export default function CategoriesScreen({ navigation }) {
  
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
    />
  );
}
