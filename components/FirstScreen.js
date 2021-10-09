
    import React,{useState } from 'react'
    import { View, Text,Image,StyleSheet } from 'react-native'
    import Button from './Buttons'
    
    export default function FirstScreen({ navigation }) {
       const [language, setLanguage] = useState(true)
  
        return (
            <View style={styles.container}>
               
            <Button title='English' onPress={()=>navigation.navigate('main',{statues: language})}  ></Button>
            <Button title='Arabic' onPress={()=>{
                setLanguage(false)
                navigation.navigate('main',{statues: language})
                
            }}  ></Button>
          
            </View>
        )
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        
           alignItems:"flex-start",
           backgroundColor:"black",
           
      
      
      },
    })