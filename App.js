import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react'

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("")
  const [courseGoal, setCourseGoal]= useState([])

  const inputHander = (enteredText) => {
    setEnteredGoalText(enteredText)

  }

  const addGoalHandler = () => {
    setCourseGoal(prevGoal => [enteredGoalText, ...prevGoal])

  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText = {inputHander} placeholder='Your course goal'/>
        <Button onPress={addGoalHandler} title='Add goal'/>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoal.map(goal => <Text key={Math.random()}>{goal}</Text>)}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'

  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    marginRight:8,
    padding:8
  },
  goalsContainer:{
    flex:5
  }
  
});
