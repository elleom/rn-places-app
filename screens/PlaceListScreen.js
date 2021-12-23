import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const PlacesListScreen = props => {
    return (
        <View>
            <Text>PlacesListScreen</Text>
        </View>
    );
};

PlacesListScreen.navigationOptions = {
    headerTitle: 'All Places'
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
