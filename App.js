import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView } from 'react-native';


export default function App() {
  const [goals, setGaol] = useState('')
  const [goalsList, setGaolList] = useState([])


  const AddGoal = () => {
    if (goals != '') {
      // I have to make sure the user doesn't accidentally Enter Empty Text !
      setGaolList((currentGoalList) => [...currentGoalList, goals])

    } else {
      Alert.alert('Error', 'Please enter a goal')
    }
  }

  return (

    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your Goal " style={styles.textInput} onChangeText={(enterdGoal) => { setGaol(enterdGoal) }}></TextInput>
        <Button title="Add Goal" onPress={AddGoal} />

      </View>
      {/* We have to Add ScrollView to the App */}
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goalsList.map((goal, index) =>
            <View key={goal} style={styles.goalsList}>
              <Text style={{ color: '#fff' }} >{index + 1}- {goal}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 40,
    marginHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    marginBottom: 15,


  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 5,
   


  },
  goalsContainer: {
    flex: 5,
   

  },

  goalsList: {
    backgroundColor: '#897AB6',
    color: '#fff',
    margin: 6,
    padding: 10,
    fontSize: 25,
    borderRadius: 10
  }
});



