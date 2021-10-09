import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Button from './Buttons'
export default function thirdScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>this is the 3 screen</Text>
           <Button title='back to secound screen' onPress={()=>navigation.navigate('SecoundScreen')} ></Button>
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