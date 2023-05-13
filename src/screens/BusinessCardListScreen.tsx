import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CardListItem from '../components/CardListItem';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllSavedCards} from '../actions/Action';
import AppDispatch from '../reducers/AppDispatch';
import {RootState} from '../store/store';
import {SwipeListView} from 'react-native-swipe-list-view';
import EmptyListPlaceholder from '../components/EmptyListPlaceholder';
import DeleteButton from '../components/DeleteButton';

interface Props {
  navigation: any;
}

type ListScreenProps = {
  navigation: NavigationProp<any>;
};

const ListScreen: React.FC<Props> = ({navigation}: ListScreenProps) => {
  const [search, setSearch] = useState('');

  const cards = useSelector((state: RootState) => state.cardReducer.cards);

  const dispatch: AppDispatch = useDispatch();

  const fetchCards = useCallback(() => {
    dispatch(fetchAllSavedCards());
  }, [dispatch]);

  useEffect(() => {
    fetchCards();
  }, [fetchCards, cards]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search"
        placeholderTextColor={Colors.black}
        value={search}
        onChangeText={text => setSearch(text)}
      />
      {cards.length > 0 ? (
        <SwipeListView
          data={cards}
          renderItem={({item}) => (
            <CardListItem item={item} navigation={navigation} />
          )}
          keyExtractor={item => item?.id?.toString()}
          rightOpenValue={-75}
          disableRightSwipe={true}
          renderHiddenItem={DeleteButton}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
        />
      ) : (
        <EmptyListPlaceholder />
      )}
      <View style={styles.FABContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            navigation.navigate('Create BusinessCard', {cards: cards})
          }>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  search: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    color: 'black',
  },
  addButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-end',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  FABContainer: {
    marginTop: -60,
    alignSelf: 'center',
  },
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

export default ListScreen;
