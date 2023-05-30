import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import BusinessCard from '../models/BusinessCard';
import React from 'react';

interface Props {
  item: BusinessCard;
}

type DeleteButtonProps = {
  item: BusinessCard;
};

const DeleteButton: React.FC<Props> = ({}: DeleteButtonProps): JSX.Element => {
  //const dispatch: AppDispatch = useDispatch();

  const deleteHandler = () => {
    //dispatch(deleteBusinessCard(item));
  };

  return (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteHandler}>
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#fff',
    right: 0,
  },
  backTextWhite: {
    color: '#f00',
  },
  blackText: {
    color: '#000',
  },
});

export default DeleteButton;
