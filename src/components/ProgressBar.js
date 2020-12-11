import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { THEME } from '../theme'

export const ProgressBar = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.bar}></View>
            <Text style={styles.text}>Осталось 14 дней</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 26,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: '98%',
        backgroundColor: THEME.NAVIGATION_BUTTON_INACTIVE_COLOR,
    },
    bar: {
        height: 22,
        alignSelf: 'flex-start',
        width: '75%',
        backgroundColor: THEME.NAVIGATION_BUTTON_ACTIVE_COLOR,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    text: {
        position: 'absolute',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
})
