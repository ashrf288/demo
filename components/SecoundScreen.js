import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Button from './Buttons'
export default function SecoundScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button title='screen 2' onPress={()=>navigation.navigate('thirdScreen')} ></Button>
            <Button title='back to screen 1' onPress={()=>navigation.navigate('first')} ></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
       justifyContent:"space-between",
       alignItems:"stretch",
       backgroundColor:"black",
       
  
  
  },
})