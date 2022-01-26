import React, { ReactNode } from "react";
import { Background } from "../Background";
import { View, Modal, ModalProps, TouchableWithoutFeedback } from "react-native";

import { styles } from "./styles";

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function SignOutModal({
  children,
  closeModal,
  ...rest
}: Props) {

  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}