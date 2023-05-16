import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default App = () => {
  const [visibleIsModal, setVisibleIsModal] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const openModalHandler = () => {
    setVisibleIsModal(true);
  };

  const addGoalHandler = (enteredGoal) => {
    if (!enteredGoal) {
      return;
    }
    setCourseGoals((currentGoal) => [
      ...currentGoal,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    closeModalHandler();
  };

  const closeModalHandler = () => {
    setVisibleIsModal(false);
  };

  const deleteGoalHandler = (idGoal) => {
    setCourseGoals((currentGoal) =>
      courseGoals.filter((goal) => goal.id !== idGoal)
    );
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add Your Goal"
        style={styles.addGoalBtn}
        onPress={openModalHandler}
      />
      <GoalInput
        visible={visibleIsModal}
        onCancel={closeModalHandler}
        onAddGoal={addGoalHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            data={itemData.item}
            onDeleteGoal={deleteGoalHandler}
            id={itemData.item.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 50,
    padding: 16,
    flex: 1,
  },
  addGoalBtn: {
    borderRadius: 6,
    backgroundColor: "#342156",
  },
});
