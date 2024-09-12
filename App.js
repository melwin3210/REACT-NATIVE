import { Button, FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [courseGoal, setCourseGoal] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoal((prevGoal) => [
      { text: enteredGoalText, id: Math.random().toString() },
      ...prevGoal,
    ]);
    endAddGoalHandler();
  };
  const deleteGoalHandler = (id) => {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoal}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
