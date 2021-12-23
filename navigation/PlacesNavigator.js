import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PlacesListScreen from '../screens/PlaceListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailsScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import {Platform} from "react-native";
import Colors from "../constants/Colors";

const PlaceNavigator = createStackNavigator({
    Places: PlacesListScreen,
    PlaceDetails: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    MapScreen: MapScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
})

export default createAppContainer(PlaceNavigator)



