import { View, Text } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
import { useNavigation } from "@react-navigation/native";
import { insertPlace } from "../util/database";

function AddPlaces() {
  const navigation = useNavigation();

  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces");
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlaces;
