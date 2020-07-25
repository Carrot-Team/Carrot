import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NewsScreen } from '../../screens/NewsScreen'
import { THEME } from '../../theme'

const NewsStack = createStackNavigator()

export const NewsStackScreen = () => {

    const screenOptions = {
        headerStyle: {
            backgroundColor: THEME.COMPONENT_BACKGROUND_COLOR,
            shadowColor: 'transparent'
        },
        headerTintColor: THEME.TEXT_COLOR
    }

    return (
        <NewsStack.Navigator initialRouteName="News" >
            <NewsStack.Screen name="News" component={NewsScreen} options={screenOptions} />
        </NewsStack.Navigator>
    )
}