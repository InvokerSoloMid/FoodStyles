/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {Dimensions, FlatList, Modal, SafeAreaView, Share, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect, useDispatch } from 'react-redux';
import { deleteCard, duplicateCard, shareCard } from '../../definitions/queries.definition';
import { addCard, getCards } from '../../definitions/queries.definition';
import { getCardsSelector } from '../../store/Home/home.selector';
import { addCardAction, setCardsAction } from '../../store/index.actions';
import { Colors } from '../../styles/Colors';
import Dialog from "react-native-dialog";
import dotsIcon from "../../assets/options3x.png";
import closeIcon from "../../assets/close3x.png";
import addIcon from "../../assets/add3x.png";
import shareIcon from "../../assets/share3x.png";
import duplicateIcon from "../../assets/duplicate3x.png";
import deleteIcon from "../../assets/delete3x.png";

import styles from './HomePage.styles';
import MenuItem from '../../components/MenuItem';
import { ICard } from '../../definitions/interfaces';
import FoodItemButton from '../../components/FoodItemButton';

const { width, height } = Dimensions.get('screen');

const HomePage = ({ cards }) => {
  const dispatch = useDispatch();

  const [selectedCard, setSelectedCard] = useState<ICard>(null as unknown as ICard);
  const [dialogActive, setDialogActive] = useState(false);

  const { data } = getCards();

  useEffect(() => {
    dispatch(setCardsAction(data?.cards));
  }, [data]);

  const handleAddCard = async() => {
    const { data } = await addCard();
    if (data?.createCard) {
      dispatch(addCardAction(data?.createCard));
    }
    if (data?.cards) {
      dispatch(setCardsAction(data?.cards));
    }
  };

  const handleDuplicateCard = async() => {
    const { data } = await duplicateCard(selectedCard?.id);
    if (data?.duplicateCard) {
      dispatch(addCardAction(data?.duplicateCard));
      setSelectedCard(null);
    }
  };

  const handleDeleteCard = async() => {
    const { data } = await deleteCard(selectedCard?.id);
    if (!!data) {
      dispatch(setCardsAction(cards?.filter(card => card?.id !== selectedCard?.id)));
      setSelectedCard(null);
      setDialogActive(false);
    }
  };

  const onShare = async () => {
    try {
      const { data } = await shareCard(selectedCard?.id);
      const result = await Share.share({
        message:
          `https://cards.foodstyles.com/${data?.shareCard}`
      });
      if (result.action === Share.sharedAction) {
        setSelectedCard(null);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <LinearGradient
        colors={[Colors.ORANGISH, Colors.MAIZE, '#f8f8f8']}
        locations={[0,0.7,0.95]}
        style={{ height: 160, top: 0, position: 'relative' }}
      />
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <FlatList
            data={cards || []}
            renderItem={({item}) => (
              <FoodItemButton
                key={item?.id}
                name={item?.name}
                onButtonPress={() => {
                  setSelectedCard(item);
                }}
                image={dotsIcon}
              />
            )}
          />
            <Modal
              animationType={'fade'}
              transparent={true}
              visible={!!selectedCard}>
                <View style={styles.modalWrapper}>
                  <View style={{ width: width }}>
                    <FoodItemButton
                      name={selectedCard?.name}
                      onButtonPress={() => {
                        setSelectedCard(null);
                      }}
                      image={closeIcon}
                    />
                    <View style={{ alignItems: 'flex-end', paddingHorizontal: 20 }}>
                      <MenuItem name='Share' onButtonPress={onShare} image={shareIcon} />
                      <MenuItem name='Duplicate' onButtonPress={handleDuplicateCard} image={duplicateIcon} />
                      <MenuItem name='Delete' onButtonPress={() => setDialogActive(true)} image={deleteIcon} />
                    </View>
                  </View>
                  <Dialog.Container visible={dialogActive}>
                    <Dialog.Title>Confirm delete</Dialog.Title>
                    <Dialog.Description>
                      This will delete the Food Style and all its settings.
                    </Dialog.Description>
                    <Dialog.Button label="Cancel" onPress={() => setDialogActive(false)} />
                    <Dialog.Button label="Delete" onPress={handleDeleteCard} />
                  </Dialog.Container>
                </View>
            </Modal>
          <FoodItemButton name='New food style' onButtonPress={handleAddCard} image={addIcon} revert />
        </View>
      </SafeAreaView>
      <View style={styles.bottomShadow}></View>
    </>
  );
};

const mapStateToProps = ({ home }) => ({
  cards: getCardsSelector(home),
});

export default connect(mapStateToProps)(HomePage);
