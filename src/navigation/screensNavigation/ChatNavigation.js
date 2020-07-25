import React from 'react'
import { Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { ChatScreen } from '../../screens/ChatScreen'
import { THEME } from '../../theme'

const ChatStack = createStackNavigator()

export const ChatStackScreen = () => {

    const screenOptions = {
        headerStyle: {
            backgroundColor: THEME.COMPONENT_BACKGROUND_COLOR,
            shadowColor: 'transparent',
        },
        headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color='#42AACC'
            />
        ),
        headerTintColor: THEME.TEXT_COLOR
    }
    
    return (
        <ChatStack.Navigator initialRouteName="Chat" >
            <ChatStack.Screen name="Chat" component={ChatScreen} options={screenOptions} />
        </ChatStack.Navigator>
    )
}