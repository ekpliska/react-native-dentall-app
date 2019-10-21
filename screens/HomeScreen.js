import React from 'react';
import { SectionList } from 'react-native';
import data from '../data';
import styled from 'styled-components/native';
import Appointment from '../components/Appointment';
import SectionTitle from '../components/SectionTitle';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    return (
        <Container>
            <SectionList
                sections={data}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <Appointment navigate={navigation.navigate} item={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <SectionTitle title={title} />
                )}
            />
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

export default HomeScreen;