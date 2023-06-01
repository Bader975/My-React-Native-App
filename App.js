import { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Button, Alert, FlatList, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import bg from './assets/bg.png';
import uuid from 'react-native-uuid';
import axios from 'axios';
import GoalsItem from './components/GoalsItem'
import GoalInuput from './components/GoalInuput';
export default function App() {
  const [data, setData] = useState([])
  const [goalsList, setGaolList] = useState([])
  const inputRef = useRef(null);
  const [ShowModel, setShowModel] = useState(false);
  const [showBox, setShowBox] = useState(true);



  const ModelShow = () => {
    setShowModel((currentmodal) => !currentmodal)
  }
  // const apiAdd = async () => {
  //   try {
  //   await axios.post('https://63e223f43e12b1937638a4ed.mockapi.io/todo', {
  //       goalsList,
  //     });

  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  const AddGoal = async (goals) => {
    // I have to make sure the user doesn't accidentally Enter Empty Text !
    if (goals != '') {
      setGaolList((currentGoalList) => [...currentGoalList, { text: goals, id: uuid.v4() }])
      try {
        await axios.post('https://63e223f43e12b1937638a4ed.mockapi.io/todo', {
          goal: goals
        });

      } catch (e) {
        console.log(e);
      }
    } else {
      Alert.alert('Error', 'Please enter a goal')
    }

  }



  const DeleteGoal = (id) => {
    Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this Gaol Form the list ?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            setGaolList((currentGoalList) => {
              return currentGoalList.filter((goal) => goal.id !== id);
        
            })
       
          },
        },
        // The "No" button
        {
          text: "No",
        },
      ]
    );
    // setGaolList((currentGoalList) => {
    //   return currentGoalList.filter((goal) => goal.id !== id);

    // })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <ImageBackground style={styles.backImage} source={require("./assets/images/bg4.jpg")} >

        {!ShowModel && <Button title=" ADD New Goal" color="#5622f2" onPress={ModelShow} />}


        {ShowModel && <GoalInuput AddGoal={AddGoal} visible={ShowModel} cancel={ModelShow} />}
        {/* We have to Add FlatList to the App */}
        <View >
          {!ShowModel && <FlatList data={goalsList} renderItem={(goalsList) => {
            return <GoalsItem text={goalsList.item.text} index={goalsList.index + 1} DeleteGoal={DeleteGoal} id={goalsList.item.id} />
          }} />}
        </View>
        </ImageBackground>
      </View>
    </>
  );
}


const styles = StyleSheet.create({

  appContainer: {
    flex: 1,
    marginTop: 10,
    paddingTop: 10,
    borderRadius:20,
    marginHorizontal: 6,
  },


  goalsContainer: {
    flex: 5,



  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: "red",
    marginBottom: 30,
  },
  backImage: {
    flex:1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex:-1,
    top: '4%',
    

  },


});




// const api = async () => {
//   try {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
//       setData(res.data);
//       console.log(data);
//     });

//   } catch (e) {
//     console.log(e);
//   }
// }


{/* Using The API Call We Fetched Data From It */ }
{/* ------------------------------------------------------ */ }
{/* <FlatList data={data} renderItem={(dataList) => {
          return (

            <View style={styles.goalsList}>
              <Text style={{ color: '#fff' }} >{`${dataList.index + 1}`}- {dataList.item.title}</Text>
            </View>
          );

        }} /> */}
{/* -------------------------------------------------------- */ }