import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NewsScreen } from '../../screens/NewsScreen'
import { THEME } from '../../theme'
import { OptionsButton } from '../../components/OptionsButton'

const NewsStack = createStackNavigator()

export const NewsStackScreen = () => {
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
        <NewsStack.Navigator initialRouteName="News">
            <NewsStack.Screen
                name="Новости"
                component={NewsScreen}
                options={screenOptions}
            />
        </NewsStack.Navigator>
    )
}
