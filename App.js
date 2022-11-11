import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');
const App = () => {
  const [location, setLocation] = useState();
  Geolocation.getCurrentPosition(
    position => {
      const initialPosition = position;
      console.log(initialPosition.coords.latitude);
      setLocation(initialPosition.coords);
    },
    error => Alert.alert('Error', JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textLocation}>Geolocation</Text>
      <View style={styles.box}>
        <Text style={styles.text}>
          latitude:-{location && location.latitude}
        </Text>
        <Text style={styles.text}>
          longitude:-{location && location.longitude}
        </Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  textLocation: {
    fontSize: 30,
    marginHorizontal: 100,
    marginTop: 300,
  },
  box: {
    width: 300,
    height: 80,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  text: {
    color: '#000000',
    fontSize: 15,
    marginHorizontal: 20,
  },
});
