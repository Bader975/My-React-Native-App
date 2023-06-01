import { StyleSheet, View, Text, Pressable } from "react-native";


function GoalsItem(props) {

    return (
        <Pressable onPress={props.DeleteGoal.bind(this, props.id)}>
            <View style={styles.goalsList}>
                <Text style={{ color: '#fff',fontSize: 18 }}>{`${props.index}`}- {props.text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalsItem;


const styles = StyleSheet.create({
    goalsList: {
        backgroundColor: '#897AB6',
        color: '#fff',
        margin: 16,
        padding: 10,
        fontSize: 25,
        borderRadius: 10,
       
    }
});
