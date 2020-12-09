import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { createStackNavigator } from '@react-navigation/stack'
import { THEME } from '../theme'

const ChatStack = createStackNavigator()

export const ChatScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.center}>
            <Text>ChatScreen</Text>
            <Button
                title="Update"
                onPress={() => {
                    navigation.navigate('Rating')
                }}
            />
        </View>
    )
}

export const ChatStackScreen = () => {
    return (
        <ChatStack.Navigator initialRouteName="Chat">
            <ChatStack.Screen name="Chat" component={ChatScreen} />
        </ChatStack.Navigator>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.BACKGROUND_COLOR,
    },
})
