/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Image, Pressable, Text } from 'react-native';
import { IPressableItem } from '../AddFoodStyleButton/AddFoodStyleButton';
import styles from './MenuItem.styles';

const MenuItem = ({name, onButtonPress, image}: IPressableItem) => {
  return (
    <Pressable onPress={onButtonPress} style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Image source={image} style={styles.icon} />
    </Pressable>
  );
};
export default MenuItem;
