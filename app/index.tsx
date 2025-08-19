import { StyleSheet, TextInput, View } from 'react-native';
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
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder="E.g. Coffee"
        style={styles.textInput}
        onChangeText={setValue}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {shoppingList.map((item) => {
        return <ShoppingListItem key={item.id} name={item.name} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 12
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50
  }
});
