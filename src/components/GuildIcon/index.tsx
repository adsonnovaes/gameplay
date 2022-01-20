import React from "react";
import { Image, View } from "react-native";
import DiscordSvg from '../../assets/discord.svg';

import { styles } from './styles';

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
  // const uri = 'https://conselhonacionaldaagua.weebly.com/uploads/1/3/8/6/13869103/gameicon_2_orig.png';

  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <View style={styles.container}>
      {iconId
        ? <Image
          source={{ uri }}
          style={styles.image}
          resizeMode="cover"
        />
        : <DiscordSvg
          width={40}
          height={40}
        />
      }
    </View>
  );
}