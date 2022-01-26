import React from 'react';

import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  outline?: boolean;
}

export function SmallButton({ title, outline = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={outline ? styles.outline : styles.container}
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}