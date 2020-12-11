import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, TextInput, StyleSheet } from 'react-native'
import { THEME } from '../theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const SearchBar = () => {
    const [value, onChangeText] = useState('')

    return (
        <View style={styles.wrapper}>
            <View style={styles.searchField}>
                <TextInput
                    style={styles.input}
                    maxLength={30}
                    placeholder="Поиск"
                    autoCorrect={false}
                    placeholderTextColor="#404040"
                    onChangeText={(text) => onChangeText(text)}
                    value={value}
                    onSubmitEditing={() => onChangeText('')}
                />
                <TouchableOpacity style={styles.searchButton}>
                    <MaterialCommunityIcons
                        name="magnify"
                        size={30}
                        color={THEME.NAVIGATION_BUTTON_INACTIVE_COLOR}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 35,
        borderRadius: 20,
        width: '98%',
        backgroundColor: THEME.COMPONENT_BACKGROUND_COLOR,
    },
    searchField: {
        marginEnd: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '92%',
    },
    input: {
        width: '92%',
        fontSize: 18,
        color: THEME.TEXT_COLOR,
    },
    searchButton: {
        marginTop: 2,
    },
})
