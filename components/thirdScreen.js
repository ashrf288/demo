import React from 'react'
import { View, Text } from 'react-native'
import Button from './Buttons'
export default function thirdScreen({ navigation }) {
    return (
        <View>
            <Text>this is the 3 screen</Text>
           <Button title='back to secound screen' onPress={()=>navigation.navigate('SecoundScreen')} ></Button>
        </View>
    )
}
