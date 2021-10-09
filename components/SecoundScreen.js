import React from 'react'
import { View, Text,Button } from 'react-native'

export default function SecoundScreen({ navigation }) {
    return (
        <View>
            <Button title='screen 2' onPress={()=>navigation.navigate('thirdScreen')} ></Button>
            <Button title='back to screen 1' onPress={()=>navigation.navigate('first')} ></Button>
        </View>
    )
}
