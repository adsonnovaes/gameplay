import React from 'react';
import { Text, View, TextInput } from 'react-native';

import { styles } from './styles';

export function SignIn() {
  
  return (
    <View style={styles.container}>
      <Text>Opa</Text>

      <TextInput style={styles.input}/>
    </View>
  );
}