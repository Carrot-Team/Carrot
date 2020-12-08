import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import { THEME } from '../../theme'

//TODO:
export const NavigationIcon = props => {
    return (
        <View style={styles.wrapper}>
            <Image {...props} source={''} style={styles.icon} />
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignContent: "center",
        margin: 5
    },
    icon: {
        width: 25,
        height: 25
    }
})
