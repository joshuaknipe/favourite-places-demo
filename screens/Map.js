import { StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
import IconButton from "../components/UI/IconButton";
import { useLayoutEffect, useCallback } from "react";

function Map({ navigation, route }) {
  
  const initialLocation = route.params && {
    lat: route.params.initialLat,
    lng: route.params.initialLng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  
  const region = {
    latitude: initialLocation ? initialLocation.lat : 37.7749,
    longitude: initialLocation ? initialLocation.lng : -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    if (initialLocation) {
      return;
    }
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, lng: lng });
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked!",
        "Please pick a location by tapping on the map first."
      );
      return;
    }
    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initialLocation) {
      return;
    }
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler, initialLocation]);

  return (
    <MapView
      initialRegion={region}
      style={styles.map}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
