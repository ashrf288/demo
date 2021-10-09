import React, { useEffect } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Button from './Buttons'
import axios from 'axios'
export default function SecoundScreen({ navigation,route }) {
    let clickHandler=()=>{
         axios.get("https://jokes-money.herokuapp.com/").then(res=>
            {
                navigation.navigate('thirdScreen',{
            screen: "thirdScreen",
            params: { joke: res.data },
        })}
         ).catch(err=>console.log(err))
        

    }
    useEffect(()=>{
        
        console.log(route.params.lang) 
    } ,[route.params])

    return (
        <View style={styles.container}>
            <Button title='Buy A Joke' onPress={clickHandler} ></Button>
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