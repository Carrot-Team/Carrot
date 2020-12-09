import React from 'react'
import { Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { ChatScreen } from '../../screens/ChatScreen'
import { THEME } from '../../theme'
import { OptionsButton } from '../../components/OptionsButton'

const ChatStack = createStackNavigator()

export const ChatStackScreen = () => {
    const screenOptions = {
        headerStyle: {
            backgroundColor: THEME.COMPONENT_BACKGROUND_COLOR,
            shadowColor: 'transparent',
        },
        headerRight: () => <OptionsButton></OptionsButton>,
        headerTintColor: THEME.TEXT_COLOR,
        headerTitleAlign: 'center',
    }

    return (
        <ChatStack.Navigator initialRouteName="Chat">
            <ChatStack.Screen
                name="Сообщения"
                component={ChatScreen}
                options={screenOptions}
            />
        </ChatStack.Navigator>
    )
}
