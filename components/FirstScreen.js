
    import React from 'react'
    import { View, Text,Button } from 'react-native'
    import ButtonStyle from './Buttons.style'
    
    export default function FirstScreen({ navigation }) {
        return (
            <View >
            <Button style={ButtonStyle.button} title='screen 1' onPress={()=>navigation.navigate('main')}  ></Button>
          
            </View>
        )
    }