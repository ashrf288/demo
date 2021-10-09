
    import React from 'react'
    import { View, Text, } from 'react-native'
    import Button from './Buttons'
    
    export default function FirstScreen({ navigation }) {
        return (
            <View >
            <Button title='screen 1' onPress={()=>navigation.navigate('main')}  ></Button>
          
            </View>
        )
    }