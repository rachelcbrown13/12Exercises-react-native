import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native'

type objectData = {
    id: string,
    name: string,  
}

type ItemProps = {
    name: string;
}

const DATA: objectData[] = [
    {
        id: '1',
        name:'Rachel'
    },
    {
        id: '2',
        name:'Maisie'
    },
    {
        id: '3',
        name:'Big Mike T'
    },
    {
        id: '4',
        name:'Imri Girl'
    },
    {
        id: '5',
        name:'Josh'
    },
    {
        id: '6',
        name:'Bethany'
    },
    {
        id: '7',
        name:'Kurtis'
    }
]

const Item = ({name}: ItemProps) => (
    <View style={styles.box}>
        <Text>{name}</Text>
    </View >
)
function CurrentExercise() {
    const answer = [];
    
    return (
        <FlatList
            data={DATA}
            renderItem={({item}) => <Item name={item.name}/>}
            keyExtractor={item => item.id}
        />
           
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

export default CurrentExercise;