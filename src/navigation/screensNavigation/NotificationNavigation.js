import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NotificationScreen } from '../../screens/NotificationScreen'
import { THEME } from '../../theme'

const NotificationStack = createStackNavigator()

export const NotificationStackScreen = () => {

    const screenOptions = {
        headerStyle: {
            backgroundColor: THEME.COMPONENT_BACKGROUND_COLOR,
            shadowColor: 'transparent'
        },
        headerTintColor: THEME.TEXT_COLOR
    }

    return (
        <NotificationStack.Navigator initialRouteName="Notification" >
            <NotificationStack.Screen name="Notification" component={NotificationScreen} options={screenOptions} />
        </NotificationStack.Navigator>
    )
}
