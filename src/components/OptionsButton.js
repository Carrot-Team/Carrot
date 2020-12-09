import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { THEME } from '../theme'
import { TouchableOpacity } from 'react-native'

export const OptionsButton = () => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                onPress={() => Alert.alert('Options button pressed')}
            >
                <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={25}
                    color={THEME.NAVIGATION_BUTTON_INACTIVE_COLOR}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: 10,
    },
})
