import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import Exercise1Screen from '../screens/Exercise1Screen';

const Tab = createBottomTabNavigator() 
    
function MyTabs () {
    return (
        <NavigationContainer>
        <Tab.Navigator initialRouteName='Home'
        screenOptions={{
            tabBarActiveTintColor: '#acb456',
            tabBarStyle: { position: 'absolute', backgroundColor: '#123456' },
          }}>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Exercise1' component={Exercise1Screen} />
        </Tab.Navigator>
      </NavigationContainer>
    )
};

export default MyTabs;