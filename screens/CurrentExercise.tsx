import { View, TextInput, Text, Button, Alert, StyleSheet } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';



function CurrentExercise() {
    const [name, setName] = useState('');

    function alert() {
        return Alert.alert(name);
    }

    return (
        <View>
            <Text>What is your name?</Text>
            <SafeAreaView style={styles.nameForm}>
                <TextInput style={styles.input} placeholder='First Name' onChangeText={setName}/>
                <TextInput style={styles.input} placeholder='Last Name' onChangeText={setName}/>
            </SafeAreaView>
            <Button title='Say Hello!' onPress={alert}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    nameForm: {
        flexDirection: 'row'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      }
})

export default CurrentExercise;