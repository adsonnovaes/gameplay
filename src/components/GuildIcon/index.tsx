import React from "react";
import { Image } from "react-native";

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://conselhonacionaldaagua.weebly.com/uploads/1/3/8/6/13869103/gameicon_2_orig.png';

  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  );
}