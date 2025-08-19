import { Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { theme } from '../theme';

type Props = {
  name: string;
};

function ShoppingListItem({ name }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      'It will be gone for good',
      [
        {
          text: 'Yes',
          onPress: () => console.log('Item deleted'),
          style: 'destructive'
        },
        {
          text: 'Cancel',
          style: 'cancel'
        }
      ]
    );
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleDelete}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ShoppingListItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#1a759f',
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: theme.colorBlack,
    borderRadius: 6,
    padding: 8
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1
  }
});
