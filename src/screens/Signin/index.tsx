import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Text,
  View,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';

import illustration from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';

import { useAuth } from '../../hooks/auth';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      //@ts-ignore
      Alert.alert(error);
    }
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

          {loading
            ? <ActivityIndicator color={theme.colors.primary} />
            : <ButtonIcon
              title='Entrar com o Discord'
              onPress={handleSignIn}
            />
          }
        </View>
      </View>
    </Background>
  );
}