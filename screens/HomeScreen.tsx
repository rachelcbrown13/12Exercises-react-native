import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, Alert, TouchableOpacity } from 'react-native';


function HomeScreen() {

    const [count, setCount] = useState(0);

    function someFxnToAddCount() {
        setCount(count + 1)
        return (
            Alert.alert(`Count: ${count + 1}`)
        )
    }
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={someFxnToAddCount}
                    style={styles.button}
                >
                    <Text style={{ color: 'white' }}>Hello, world!</Text>
                </TouchableOpacity>               
            </View>
            
            <View>
                <Text>You have pressed {count} time(s) so far</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
      flex: .25,
      flexDirection: 'row',
      height: 150,
      marginTop: 100,
      width: 150,
      backgroundColor: '#acb456',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    button: {
      backgroundColor: '#123456',
      padding: 10,
      borderRadius: 5,
    }
  });
  

export default HomeScreen;