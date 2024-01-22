import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Exercise1Screen from '../screens/CurrentExercise';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, fa5 } from '@fortawesome/free-solid-svg-icons'



const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'
                screenOptions={{
                    tabBarActiveTintColor: 'black',
                    tabBarActiveBackgroundColor: '#acb456',
                    tabBarStyle: { position: 'absolute', backgroundColor: '#123456' },

                }}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarIcon: () => {
                            return (
                                <FontAwesomeIcon icon={faHome} size={24} 
                                color={"#8e8e93"} />
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name='Exercise 5'
                    component={Exercise1Screen}
                    options={{
                        tabBarIcon: () => {
                            return (
                                <FontAwesomeIcon icon={fa5} color='white'/>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
};

export default MyTabs;