import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RatingScreen } from '../../screens/RatingScreen'
import { THEME } from '../../theme'
import { OptionsButton } from '../../components/OptionsButton'

const RatingStack = createStackNavigator()

export const RatingStackScreen = () => {
    //TODO: Вынести в отдельную компоненту, в каждом скрине идёт копирование одних и тех же свойств
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
        <RatingStack.Navigator initialRouteName="Rating">
            <RatingStack.Screen
                name="Рейтинг"
                component={RatingScreen}
                options={screenOptions}
            />
        </RatingStack.Navigator>
    )
}
