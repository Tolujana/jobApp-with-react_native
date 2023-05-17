import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard, { popularJobCard } from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";
import dataList from "../../../data";

const Popularjobs = () => {
  const router = useRouter();
  // const { data, isLoading, error } = useFetch("search", { query: "React Developer", num_pages: 1 });
  const { data } = dataList;
  const isLoading = false;
  const error = false;
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View styles={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={(item) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
