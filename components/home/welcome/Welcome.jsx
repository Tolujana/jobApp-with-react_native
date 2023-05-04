import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlateList,
  FlatList,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
const JobTypes = ["Full-time", "Part-time"];
const Welcome = () => {
  const router = useRouter();
  const [activeJobTypes, setActiveJobTypes] = useState("full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}> Hello Jane</Text>
        <Text style={styles.welcomeMessage}> Find your perfect Jobs</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            PlaceHolder="Search jobs"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={JobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobTypes, item)}
              onPress={() => {
                setActiveJobTypes(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.activeJobTypes}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  );
};

export default Welcome;
