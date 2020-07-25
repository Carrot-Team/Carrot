import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../../screens/HomeScreen'
import { THEME } from '../../theme'

const HomeStack = createStackNavigator()

export const HomeStackScreen = () => {

    const screenOptions = {
        headerStyle: {
            
            backgroundColor: THEME.COMPONENT_BACKGROUND_COLOR,
            shadowColor: 'transparent'
        },
        headerTintColor: THEME.TEXT_COLOR
    }

    return (
        <HomeStack.Navigator initialRouteName="Home" >
            <HomeStack.Screen name="Home" component={HomeScreen} options={screenOptions} />
        </HomeStack.Navigator>
    )
}