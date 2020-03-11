import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather';

import { openWeatherAPI } from './utils/api';

export default class App extends React.Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  // Javascript navigator to find location of user.
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: "Error, unable to get weather conditions"
        })
      }
    )
  }

  // Function that calls the weeather
  fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${openWeatherAPI}&units=imperial`
    )
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading, weatherCondition, temperature } = this.state;

    return (
      <View style={styles.container}>

        {/* This displays "Fetching Weather" when we make the API request and we are waiting for the response. */}
        {isLoading ? (<Text style={styles.loadingText}>Fetching Weather</Text>) : (
          <View>
            <Weather weather={weatherCondition} temperature={temperature} />
          </View>
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',

  }
});
