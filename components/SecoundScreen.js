import React, { useEffect } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Button from './Buttons'
export default function SecoundScreen({ navigation,route }) {
    useEffect(()=>{
       console.log(route.params.lang)
    } ,[route.params])

    return (
        <View style={styles.container}>
            <Button title='Buy A Joke' onPress={()=>navigation.navigate('thirdScreen')} ></Button>
            <Button title='back to Language' onPress={()=>navigation.navigate('first')} ></Button>
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