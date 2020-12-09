import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../../screens/HomeScreen'
import { THEME } from '../../theme'
import { OptionsButton } from '../../components/OptionsButton'

const HomeStack = createStackNavigator()

export const HomeStackScreen = () => {
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
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen
                name="Профиль"
                component={HomeScreen}
                options={screenOptions}
            />
        </HomeStack.Navigator>
    )
}
