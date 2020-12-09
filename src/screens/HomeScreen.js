import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { OptionsButton } from '../components/OptionsButton'

export const HomeScreen = () => {
    return (
        <View style={styles.center}>
            <Text>HomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
