import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
   
   
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 100,
    elevation: 100,
    margin:5,
    // marginLeft:'25%',
    width:'50%',
    backgroundColor: 'white',
    
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});