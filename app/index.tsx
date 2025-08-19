import {
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  View,
  Text
} from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
import { theme } from '../theme';
import { useState } from 'react';

type ShoppingListItemType = {
  id: string;
  name: string;
};

const initialList: ShoppingListItemType[] = [
  {
    id: '1',
    name: 'Coffee'
  },
  {
    id: '2',
    name: 'Tea'
  },
  {
    id: '3',
    name: 'Milk'
  }
];

export default function App() {
  const [value, setValue] = useState('');
  const [shoppingList, setShoppingList] =
    useState<ShoppingListItemType[]>(initialList);

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toISOString(), name: value },
        ...shoppingList
      ];
      setShoppingList(newShoppingList);
      setValue('');
    }
  };

  return (
    <FlatList
      data={shoppingList}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>Your shopping list is empty</Text>
        </View>
      }
      ListHeaderComponent={
        <TextInput
          value={value}
          placeholder="E.g. Coffee"
          style={styles.textInput}
          onChangeText={setValue}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      }
      renderItem={({ item }) => {
        return <ShoppingListItem name={item.name} />;
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12
  },
  contentContainer: {
    paddingBottom: 24
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite
  },
  listEmptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18
  }
});
