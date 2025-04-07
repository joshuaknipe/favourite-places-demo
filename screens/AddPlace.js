import { View, Text } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
import { useNavigation } from "@react-navigation/native";

function AddPlaces() {
  const navigation = useNavigation();

  function createPlaceHandler(place) {
    navigation.navigate("AllPlaces", { place: place });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlaces;
