import {
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Alert,
  View
} from 'react-native';
import { theme } from '../theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';

type Props = {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
};

function ShoppingListItem({
  name,
  isCompleted,
  onDelete,
  onToggleComplete
}: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      'It will be gone for good',
      [
        {
          text: 'Yes',
          onPress: () => onDelete(),
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
    <Pressable
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined
      ]}
      onPress={onToggleComplete}
    >
      <View style={styles.row}>
        <Entypo
          name={isCompleted ? 'check' : 'circle'}
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorCerulean}
        />
        <Text
          numberOfLines={1}
          style={[
            styles.itemText,
            isCompleted ? styles.completedText : undefined
          ]}
        >
          {name}
        </Text>
        <TouchableOpacity onPress={handleDelete} activeOpacity={0.7}>
          <AntDesign
            name="closecircle"
            size={24}
            color={isCompleted ? theme.colorGrey : theme.colorRed}
          />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

export default ShoppingListItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 12,
    paddingVertical: 16
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    minWidth: 0,
    marginHorizontal: 8
  },
  completedText: {
    textDecorationLine: 'line-through',
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey
  }
});
