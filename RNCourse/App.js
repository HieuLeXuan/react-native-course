import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  const addGoal = (enteredGoalText) => {
    if (!enteredGoalText) {
      return
    }
    setCourseGoals((currentGoal) => [
      ...currentGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
    endAddGoalHandler()
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentGoal) =>
      currentGoal.filter((goal) => goal.id !== id)
    )
  }

  const openModalHandler = () => {
    setModalIsVisible(true)
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal practice"
          color="#5e0acc"
          onPress={openModalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoal}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {/* <ScrollView alwaysBounceHorizontal={false}>
          {courseGoals.map((goal, i) => (
            <View key={i} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
          {
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHandler}
                  />
                )
              }}
              keyExtractor={(item, index) => {
                return item.id
              }}
              alwaysBounceVertical={false}
            ></FlatList>
          }
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 4,
  },
})
