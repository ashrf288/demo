
    import React from 'react'
    import { View, Text,Image,StyleSheet } from 'react-native'
    import Button from './Buttons'
    
    export default function FirstScreen({ navigation }) {
        return (
            <View style={styles.container}>
               
            <Button title='screen 1' onPress={()=>navigation.navigate('main')}  ></Button>
          
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