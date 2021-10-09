import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import FirstScreen from './components/FirstScreen';
import SecoundScreen from './components/SecoundScreen';
import thirdScreen from './components/thirdScreen';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Main=()=>{
return(
  <Stack.Navigator initialRouteName="SecoundScreen"  screenOptions={{
    headerShown: false
  }}>
  <Stack.Screen name="thirdScreen" component={thirdScreen} />
  <Stack.Screen name="SecoundScreen" component={SecoundScreen} />
</Stack.Navigator>
)
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container} >
    <NavigationContainer>
       <Tab.Navigator screenOptions={{ headerShown: false}}  tabBar={() => null}>
        <Tab.Screen name="first" component={FirstScreen} />
        <Tab.Screen name="main" component={Main} />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
});