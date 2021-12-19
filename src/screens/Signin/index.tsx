import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import illustration from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';

export function SignIn() {

  return (
    <View style={styles.container}>
      <Image
        source={illustration}
        style={styles.image}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatonas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title='Entrar com o Discord'
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
}