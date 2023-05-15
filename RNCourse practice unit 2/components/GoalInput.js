import { useState } from 'react'
import { StyleSheet, TextInput, Button, View, Modal } from 'react-native'

export default GoalInput = (props) => {
  const [goalInput, setGoalInput] = useState('')

  const changeGoalInputHandler = (enteredGoal) => {
    setGoalInput(enteredGoal)
  }

  const addGoalHandler = () => {
    console.log('goal input:', goalInput)
    props.onAddGoal(goalInput)
    setGoalInput('')
  }

  return (
    <Modal visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter yor goal.."
          onChangeText={changeGoalInputHandler}
          value={goalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  inputText: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 16,
  },
})
