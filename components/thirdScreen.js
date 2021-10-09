import React, { useEffect,useState } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Button from './Buttons'
export default function thirdScreen({ navigation,route }) {
    // const [data, setData] = useState([])
    let getRandom=(min, max)=> {
        
      return Math.floor(Math.random() * (max - min + 1) + min); 
      }
      const number=getRandom(0,route.params.params.joke.length-1)

    useEffect(()=>{
        
      console.log(route.params.params.joke)
      console.log(route.params.params.joke[0].joke)
    } ,[route.params])

    return (
        <View style={styles.container}>

            <Text style={styles.textStyle}>{route.params.params.joke[number].joke}</Text> 
           <Button title='back to secound screen' onPress={()=>navigation.navigate('first')} ></Button>

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
  textStyle: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 0,
    marginLeft:'30%',
    width: 200,
    color:"white"
  }
})