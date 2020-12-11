import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View, StyleSheet, Image, Alert } from 'react-native'
import { THEME } from '../theme'

export const FilterButtons = () => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity>
                <View style={styles.active}>
                    <Text style={styles.text}>Продажи</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.inactive}>
                    <Text style={styles.text}>Магазины</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.inactive}>
                    <Text style={styles.text}>Все</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '98%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    text: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 18,
        color: THEME.TEXT_COLOR,
    },
    active: {
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 20,
        backgroundColor: THEME.NAVIGATION_BUTTON_INACTIVE_COLOR,
        borderWidth: 0.5,
        borderColor: THEME.NAVIGATION_BUTTON_INACTIVE_COLOR,
        color: THEME.TEXT_COLOR,
    },
    inactive: {
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: THEME.NAVIGATION_BUTTON_INACTIVE_COLOR,
        color: THEME.TEXT_COLOR,
    },
})
