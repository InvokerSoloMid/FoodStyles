/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './FoodItemButton.styles';

interface IPressableItem {
  name: string;
  onButtonPress: () => void;
  image: any;
  revert?: boolean;
}

const FoodItemButton = ({ name, onButtonPress, image, revert = false }: IPressableItem) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={[styles.content, revert && styles.revert]}>
          <Text style={styles.title}>{name}</Text>
          <Pressable onPress={onButtonPress}>
            <View style={[styles.circleBtnContainer, revert && styles.noBorder]}>
              <Image source={image} style={[styles.image, revert && styles.bigImage]} />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default FoodItemButton;
