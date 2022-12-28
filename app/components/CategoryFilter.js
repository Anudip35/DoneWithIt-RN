import React, { useMemo, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import NavBarButton from "../components/NavBarButton";

function CategoryFilter({ lists, categoryData }) {
  const handleFilter = (id) => {
    categoryData(lists.filter((listing) => listing.categoryId === id));
  };

  const categories = useMemo(
    () => [
      {
        label: "Furniture",
        value: 1,
      },
      {
        label: "Cars",
        value: 2,
      },
      {
        label: "Cameras",
        value: 3,
      },
      {
        label: "Games",
        value: 4,
      },
      {
        label: "Clothing",
        value: 5,
      },
      {
        label: "Sports",
        value: 6,
      },
      {
        label: "Movies",
        value: 7,
      },
      {
        label: "Books",
        value: 8,
      },
      {
        label: "Other",
        value: 9,
      },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <NavBarButton
            title={item.label}
            onPress={() => handleFilter(item.value)}
          />
        )}
        keyExtractor={(item) => item.value}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default CategoryFilter;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 5,
    marginBottom: 20,
  },
});
