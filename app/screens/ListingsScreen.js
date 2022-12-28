import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import useApi from "../hooks/useApi";
import CategoryFilter from "../components/CategoryFilter";

function ListingsScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const getListingsApi = useApi(listingsApi.getListings);
  const [filteredData, setFilteredData] = useState(getListingsApi.data);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  const categoryData = (listings) => {
    setFilteredData(listings);
  };

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        <CategoryFilter
          lists={getListingsApi.data}
          categoryData={categoryData}
        />
        {!Object.keys(filteredData).length && (
          <AppText>No Listings Available for selected Category!</AppText>
        )}
        <FlatList
          data={filteredData}
          keyExtractor={(listing) => listing.id.toString()}
          extraData={filteredData}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
          refreshing={refreshing}
          onRefresh={() => getListingsApi.request()}
          showsVerticalScrollIndicator={false}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
