import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NotificationScreen } from '../../screens/NotificationScreen'
import { THEME } from '../../theme'
import { OptionsButton } from '../../components/OptionsButton'

const NotificationStack = createStackNavigator()

export const NotificationStackScreen = () => {
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
        <NotificationStack.Navigator initialRouteName="Notification">
            <NotificationStack.Screen
                name="Уведомления"
                component={NotificationScreen}
                options={screenOptions}
            />
        </NotificationStack.Navigator>
    )
}
