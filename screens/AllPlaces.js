import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

function AllPlaces({ route }) {
    const [loadedPlaces, setLoadedPlaces] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused && route.params) {
            setLoadedPlaces((currentPlaces) => [...currentPlaces, route.params.place]);
        }
    }, [isFocused, route]);
    return <PlacesList places={loadedPlaces} />
}

export default AllPlaces;