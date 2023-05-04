import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import { popularJobCard } from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Text style={styles.headerTitle}>Popular jobs</Text>
    </View>
  );
};

export default Popularjobs;
