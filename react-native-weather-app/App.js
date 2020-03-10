import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather';

export default class App extends React.Component {
  state = {
    isLoading: false
  };

  render() {
    const { isLoading } = this.state;

    return (
      <View style={styles.container}>

        {/* This displays "Fetching Weather" when we make the API request and we are waiting for the response. */}
        {isLoading ? (<Text>Fetching Weather</Text>) : (
          <View>
            <Weather />
          </View>
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
