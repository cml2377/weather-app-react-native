import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Weather = () => {
    return (
        // Weather component contains a header that holds the weather icon and temperature
        // And a container that displays the text associated with the weather condition
        <View style={styles.container}>

            <View style={styles.headerContainer}></View>
            <View style={styles.bodyContainer}></View>

        </View>
    )
}

const styles = StyleSheet({
    container: {
        flex: 1
    },
    headerContainer: {},
    bodyContainer: {}
})