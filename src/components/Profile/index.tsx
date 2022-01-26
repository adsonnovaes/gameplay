import React, { useState } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";

import { SignOutModal } from '../../components/SignoutModal';
import { SmallButton } from '../../components/SmallButton';

import { Avatar } from "../Avatar";

import { styles } from './styles';

export function Profile() {
  const { user, singOut } = useAuth();
  const [openSignoutModal, setOpenSignoutModal] = useState(false);

  function handleOpenModal() {
    setOpenSignoutModal(true);
  }

  function handleCloseModal() {
    setOpenSignoutModal(false);
  }

  return (
    <View style={styles.container}>

      <RectButton onPress={handleOpenModal}>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>

        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            {user.firstName}
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>

      </View>

      <SignOutModal visible={openSignoutModal} closeModal={handleCloseModal}>
        <View style={styles.containerSignOut}>
          <View style={styles.headerSignOut}>
            <Text style={styles.title}>Deseja sair do </Text>
            <View style={styles.textsContainer}>
              <Text style={styles.witheText}>Game</Text>
              <Text style={styles.primaryText}>Play</Text>
              <Text style={styles.witheText}>?</Text>
            </View>
          </View>

          <View style={styles.containerButtons}>
            <View style={styles.outlineButton}>
              <SmallButton title="Não" outline onPress={handleCloseModal} />
            </View>
            <SmallButton title="Sim" onPress={singOut} />
          </View>
        </View>
      </SignOutModal>
    </View>
  );
}