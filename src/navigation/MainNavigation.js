import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ChatStackScreen } from '../navigation/screensNavigation/ChatNavigation'
import { HomeStackScreen } from '../navigation/screensNavigation/HomeNavigation'
import { NewsStackScreen } from '../navigation/screensNavigation/NewsNavigation'
import { RatingStackScreen } from '../navigation/screensNavigation/RatingNavigation'
import { NotificationStackScreen } from '../navigation/screensNavigation/NotificationNavigation'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { THEME } from '../theme'

//TODO: Реализовать createMaterialBottomTabNavigator для Android
const MainStack = createBottomTabNavigator()

export const AppNavigation = () => {
    const defaultOptions = {
        activeTintColor: THEME.NAVIGATION_BUTTON_ACTIVE_COLOR,
        inactiveTintColor: THEME.NAVIGATION_BUTTON_INACTIVE_COLOR,
        animationEnabled: true,
        showLabel: false,
        showIcon: true,
        style: {
            backgroundColor: THEME.COMPONENT_BACKGROUND_COLOR,
            borderTopColor: THEME.COMPONENT_BACKGROUND_COLOR,
        },
    }

    const iconSize = 30

    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName="Rating"
                tabBarOptions={defaultOptions}
            >
                <MainStack.Screen
                    name="News"
                    component={NewsStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="comment-text-outline"
                                size={iconSize}
                                color={color}
                            />
                        ),
                    }}
                />
                <MainStack.Screen
                    name="Chat"
                    component={ChatStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="chat-outline"
                                size={iconSize}
                                color={color}
                            />
                        ),
                    }}
                />
                <MainStack.Screen
                    name="Rating"
                    component={RatingStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="chart-line-variant"
                                size={iconSize}
                                color={color}
                            />
                        ),
                    }}
                />
                <MainStack.Screen
                    name="Notification"
                    component={NotificationStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="bell-outline"
                                size={iconSize}
                                color={color}
                            />
                        ),
                    }}
                />
                <MainStack.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="account-outline"
                                size={iconSize}
                                color={color}
                            />
                        ),
                    }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}
