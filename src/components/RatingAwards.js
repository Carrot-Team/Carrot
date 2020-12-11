import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View, StyleSheet, Image } from 'react-native'
import { THEME } from '../theme'

export const RatingAwards = () => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.place}>
                <View style={styles.bg}>
                    <Text style={styles.text}>1 место</Text>
                </View>

                <Image
                    style={styles.image}
                    source={require('../../assets/prizes/1.jpg')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.place}>
                <View style={styles.bg}>
                    <Text style={styles.text}>2 место</Text>
                </View>
                <Image
                    style={styles.image}
                    source={require('../../assets/prizes/2.jpg')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.place}>
                <View style={styles.bg}>
                    <Text style={styles.text}>3 место</Text>
                </View>
                <Image
                    style={styles.image}
                    source={require('../../assets/prizes/3.jpg')}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '98%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bg: {
        height: '20%',
        borderTopLeftRadius: 20,
        backgroundColor: THEME.BUTTON_BLUE_COLOR,
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        color: THEME.BACKGROUND_COLOR,
    },
    place: {
        height: 138,
        width: '31%',
    },
    image: {
        height: '80%',
        width: '100%',
        borderBottomRightRadius: 20,
    },
})
