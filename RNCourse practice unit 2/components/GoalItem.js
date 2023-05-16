import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default GoalItem = (props) => {
  return (
    <View style={styles.itemGoal}>
      <Pressable
        onPress={props.onDeleteGoal.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.itemText}>{props.data.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemGoal: {
    borderRadius: 6,
    margin: 5,
    backgroundColor: "#342156",
  },
  pressedItem: {
    opacity: 0.2,
  },
  itemText: {
    padding: 8,
    color: "white",
  },
});
