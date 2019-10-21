import React from 'react';
import { View, Text } from 'react-native';

const PatientScreen = ({ navigate }) => {
    return (
        <View>
            <Text>PatientScreen</Text>
        </View>
    )
}

PatientScreen.navigationOptions = {
    title: 'Карта пациента',
    headerTintColor: '#2A86FF',
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8
    }
};

export default PatientScreen;