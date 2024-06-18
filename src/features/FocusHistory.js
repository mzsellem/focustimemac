import {View, Text, StyleSheet, Flatlist} from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({history}) => {

  if(!history || !history.length) <Text style={styles.title}>We haven't focused on anything yet</Text>;

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Things we've focused on:
      </Text>
      <Flatlist
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles =StyleSheet.create({
  container: {
    padding: spacing.sm,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.md,
  },
  title: {
    color: colors.white, 
    fontSize: fontSizes.lg,
    padding: spacing.md,
    fontWeight: 'bold',
  },
})