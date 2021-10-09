
    import React from 'react'
    import { View, Text,Image,StyleSheet } from 'react-native'
    import Button from './Buttons'
    
    export default function FirstScreen({ navigation }) {
        return (
            <View style={styles.container}>
               
            <Button title='English' onPress={()=>navigation.navigate('main')}  ></Button>
            <Button title='Arabic' onPress={()=>navigation.navigate('main')}  ></Button>
          
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