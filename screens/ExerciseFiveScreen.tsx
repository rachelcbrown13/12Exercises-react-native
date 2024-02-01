import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

function ExerciseFiveScreen() {
    return (
        <View style={styles.wholeSection}>
            <View style={styles.ejSection}>
                <Image source={require('../assets/EJonPlane.jpeg')} style={styles.image}/>
                <Text style={styles.text}>EJ</Text>
            </View>
            <View style={styles.apollosSection}>
                <Image source={require('../assets/Apollos.jpeg')} style={styles.image}/>
                <Text style={styles.text}>Apollos</Text>
            </View>
            <View style={styles.imriSection}>
                <Image source={require('../assets/Imri.jpeg')} style={styles.image}/>
                <Text style={styles.text}>Imri</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wholeSection: {
        flexDirection:'row',
        justifyContent: 'space-evenly',

    },
    ejSection: {
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    apollosSection: {
        backgroundColor: 'blue',
        justifyContent: 'center',
    },
    imriSection: {
        backgroundColor: 'purple',
        justifyContent: 'center',
    },
    text: {
        color:'white', 
        textAlign:'center',
        fontSize: 24
    },
    image: {
        width: 100,
        height: 100,
    }
})


export default ExerciseFiveScreen;