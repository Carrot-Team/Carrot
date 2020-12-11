import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { THEME } from '../theme'
import { SearchBar } from '../components/SearchBar'
import { RatingAwards } from '../components/RatingAwards'
import { ProgressBar } from '../components/ProgressBar'
import { FilterButtons } from '../components/FilterButtons'

export const RatingScreen = () => {
    const navigation = useNavigation() // Используем хук, вместо проброса через props-ы

    return (
        <View style={styles.center}>
            <View style={styles.search}>
                <SearchBar />
            </View>
            <View style={styles.top}>
                <FilterButtons />
                <RatingAwards />
                <ProgressBar />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        padding: 10,
        backgroundColor: THEME.BACKGROUND_COLOR,
    },
    search: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    top: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        height: 225,
    },
})
