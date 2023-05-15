import { StyleSheet, View, Text } from 'react-native'

export default GoalItem = (props) => {
  console.log('goal item:', props.data)
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.data.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 6,
    padding: 8,
    marginTop: 8,
    backgroundColor: '#342156',
  },
  itemText: {
    color: 'white',
  },
})
