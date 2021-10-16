import React, { useEffect,useState } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Button from './Buttons'
import AsyncStorage from '@react-native-async-storage/async-storage'

let oldJokes=[]

const getData = async () => {
  try {
    const data = await AsyncStorage.getItem('JokeId')
    console.log(data)
    if(data ) {
      oldJokes=JSON.parse(data)
      console.log('after parse'+data)
    }else{
      oldJokes=[]
    }
  } catch(e) {
    // error reading value
  }
}
getData()
export default function thirdScreen({ navigation,route }) {
    // const [data, setData] = useState([])
    let getRandom=(min, max)=> {
        
      return Math.floor(Math.random() * (max - min + 1) + min); 
      }
      const number=getRandom(0,route.params.params.joke.length-1)

    useEffect(()=>{
      
      console.log(oldJokes)
      console.log(route.params.params.joke[0].joke)
      oldJokes.push(route.params.params.joke[number]._id)
      saveData()
     
    } ,[route.params])
   let saveData=async()=>{
      try {
        await  AsyncStorage.setItem('JokeId',JSON.stringify(oldJokes))
      } catch (e) {
        console.log('saving error') 
      }
    }

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