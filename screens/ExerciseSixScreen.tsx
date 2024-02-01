import { ScrollView, Text, View, Image, StyleSheet } from 'react-native'

function ExerciseSix() {

    // const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const answer = numList.map((num) =>
    //     <View style={styles.box} key={num}>
    //         <Text>{num}</Text>
    //     </View>
    //     // <Text key={num.toString()}>{num}</Text>
    // );
    const answer = [];
    for (var i = 1; i <= 15; i++) {
        answer.push(
            <View style={styles.box} key={i} >
                <Text>{i}</Text>
            </View >
        )
    }
    return (
        <ScrollView>
            <View style={styles.scrollView}>{answer}</View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    scrollView: {
        padding: 8,
        flex: 1,
        alignItems: 'center'
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#42cab6',
        margin: 8
    }
})



export default ExerciseSix;