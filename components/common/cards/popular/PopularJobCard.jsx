import React from "react";
import { View, Text, TouchableOpacityBase, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)} onPress={() => handleCardPress()}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image source={{ uri: item.employer_logo }} resizeMode="contain" style={styles.logoImage} />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={2}>
        {item.emploayer_name}
      </Text>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
