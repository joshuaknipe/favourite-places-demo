import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function Map() {
const region = {
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};


  return (
      <MapView initialRegion={region} style={styles.map}>

        </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});