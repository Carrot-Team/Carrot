import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View, StyleSheet, Image } from 'react-native'
import { Value } from 'react-native-reanimated'
import { THEME } from '../theme'

export const UserListItem = ({ user }) => {
    return (
        <View>
            <TouchableOpacity style={styles.wrapper}>
                <View style={styles.number}>
                    <Text style={styles.text}>{user.id}</Text>
                </View>
                <View style={styles.avatar}>
                    <Image style={styles.image} source={user.img} />
                </View>
                <View style={styles.name}>
                    <Text style={styles.text}>
                        {user.name + ' ' + user.surname}
                    </Text>
                    <Text style={styles.value}>{user.sales}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        borderTopWidth: 1,
        borderTopColor: THEME.COMPONENT_BACKGROUND_COLOR,
    },
    number: {
        width: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar: {
        width: '20%',
    },
    image: {
        alignSelf: 'flex-start',
        width: 56,
        height: 56,
        borderRadius: 40,
    },
    name: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text: {
        fontSize: 16,
        color: THEME.TEXT_COLOR,
    },
    value: {
        fontSize: 16,
        color: THEME.NAVIGATION_BUTTON_ACTIVE_COLOR,
    },
})
