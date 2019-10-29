import React, { useState, useEffect } from 'react';
import { SectionList } from 'react-native';
import data from '../data';
import styled from 'styled-components/native';
import Appointment from '../components/Appointment';
import SectionTitle from '../components/SectionTitle';
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-swipeable-row';
import { setProvidesAudioData } from 'expo/build/AR';

const HomeScreen = ({ navigation }) => {

    const [data, setData] = useState(null);

    return (
        <Container>
            {data &&
                <SectionList
                    sections={data}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => (
                        <Swipeable
                            rightButtons={[
                                <SwipeViewButton style={{ backgroundColor: '#b4c1cb' }}>
                                    <Ionicons name="md-create" size={28} color="white" />
                                </SwipeViewButton>,
                                <SwipeViewButton style={{ backgroundColor: '#f85a5a' }}>
                                    <Ionicons name="ios-close" size={28} color="white" />
                                </SwipeViewButton>
                            ]} >
                            <Appointment navigate={navigation.navigate} item={item} />
                        </Swipeable>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <SectionTitle title={title} />
                    )}
                />
            }
            <PlusButton>
                <Ionicons name="ios-add" size={36} color="white" />
            </PlusButton>
        </Container>
    );
}

HomeScreen.navigationOptions = {
    title: 'Пациенты',
    headerTintColor: '#2A86FF',
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8
    }
};

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;

const PlusButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	border-radius: 50px;
	width: 64px;
	height: 64px;
	background: #2a86ff;
	position: absolute;
	right: 25px;
	bottom: 25px;
	shadow-color: #2a86ff;
	shadow-opacity: 0.7;
	shadow-radius: 5.5;
	elevation: 10;
`;

const SwipeViewButton = styled.TouchableOpacity`
    width: 75px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default HomeScreen;