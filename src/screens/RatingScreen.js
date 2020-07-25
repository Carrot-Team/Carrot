import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import  { useNavigation } from '@react-navigation/native'
import { THEME } from '../theme';


export const RatingScreen = () => {
    const navigation = useNavigation(); // Используем хук, вместо проброса через props-ы


    return <View style={styles.center}>
        <Text >RatingScreen</Text>
        <Button title='Go' onPress={() => {navigation.navigate('Chat')}} />
    </View>
    
    
}

const styles = StyleSheet.create({
    center: {
        flex: 1 ,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:THEME.BACKGROUND_COLOR
    }
})