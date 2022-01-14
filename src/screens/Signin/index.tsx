import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Text,
  View,
  Image
} from 'react-native';

import illustration from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';

import { useAuth } from '../../hooks/auth';
import { styles } from './styles';

export function SignIn() {

  const navigation = useNavigation();
  const { user } = useAuth();

  function handleSignIn() {
    //@ts-ignore
    navigation.navigate('Home');
  }

  return (
    <Background>
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
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
}