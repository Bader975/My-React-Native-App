import { View, TextInput, Button, StyleSheet, Modal, Image, Keyboard, ImageBackground } from 'react-native'
import { useState, useRef } from 'react';


function GoalInuput(props) {
    const inputRef = useRef(null);
    const [goals, setGaol] = useState('')

    const addGoal = () => {
        props.AddGoal(goals);

        setGaol('')
        // to colse the Modal aging and view the list of goals 
        props.cancel()

    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <ImageBackground style={styles.backImage} source={require("../assets/images/bg4.jpg")} >
                    <TextInput ref={inputRef} placeholder="Enter your Goal" style={styles.textInput} value={goals} onSubmitEditing={Keyboard.dismiss} onChangeText={(enterdGoal) => { setGaol(enterdGoal) }}></TextInput>
                    {/* <Image style={styles.image} source={require('../assets/images/goal.png')} /> */}
                    <View style={styles.ButtonsContainer}>
                        <Button title="Cancel" onPress={props.cancel} color="#f31282" />
                        <Button title="Add Goal" onPress={addGoal} color="#5e0acc" />

                    </View>
                </ImageBackground>
            </View>
        </Modal>
    );
}

export default GoalInuput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 5,
        backgroundColor: '#311b6b',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: 100,
        height: 100,
        // margin: 60
    },

    textInput: {
        borderColor: '#cccccc',
        borderWidth: 1,
        width: '80%',
        borderRadius: 10,
        padding: 13,
        backgroundColor: '#fff',
        marginTop: 50,
        marginLeft: 40,
    },
    ButtonsContainer: {
        flexDirection: 'row',
        gap: 20,
        marginVertical: 10,
        marginHorizontal: 50
    },
    backImage: {
        flex:1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,


    },
});