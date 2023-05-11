import React from "react";
import { View, Text, TouchableOpacityBase } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)} onPress={() => handleCardPress()}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image source={{ uri: item.employer_logo }} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
