import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/Button';
import { Badge } from '../components/Badge';
import { Foundation, Ionicons } from '@expo/vector-icons';
import { patientsApi } from '../utils/api';

const PatientScreen = ({ navigation }) => {

    const [appointmentList, setAppointmentList] = useState([]);

    useEffect(() => {
        const id = navigation.getParam('patient')._id;
        
        patientsApi.show(id)
        .then(({ data }) => {
            console.log('data', data);
                setAppointmentList(data.data.appointments);
            })
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <PatientDetails>
                <PatientFullName>
                    {navigation.getParam('patient', {}).fullname}
                </PatientFullName>
                <GrayText>
                    {navigation.getParam('patient', {}).phone}
                </GrayText>
            
                <PatientButtons>
                    <FormulaButtonView>
                        <Button>Формула зубов</Button>
                    </FormulaButtonView>
                    <PhoneButtonView>
                        <Button color="#84D269">
                            <Foundation name="telephone" size={22} color="white" />
                        </Button>
                    </PhoneButtonView>
                </PatientButtons>

            </PatientDetails>

            <PatientAppointments>
                <Container>
                    {
                        appointmentList.map(appointment => {
                            return (
                                <AppointmentCard key={appointment._id}>
                                    <MoreButton>
                                        <Ionicons name="md-more" size={24} color="rgba(0, 0, 0, 0.4)" />
                                    </MoreButton>

                                    <AppointmentCardRow>
                                        <Ionicons name="md-medical" size={16} color="#A3A3A3" />
                                        <AppointmentCardLabel>
                                            Зуб: <Text style={{ fontWeight: '600' }}>{appointment.teethNumber}</Text>
                                        </AppointmentCardLabel>
                                    </AppointmentCardRow>

                                    <AppointmentCardRow>
                                        <Ionicons name="md-medical" size={16} color="#A3A3A3" />
                                        <AppointmentCardLabel>
                                            Диагноз: <Text style={{ fontWeight: '600' }}>{appointment.diagnosis}</Text>
                                        </AppointmentCardLabel>
                                    </AppointmentCardRow>

                                    <AppointmentCardRow style={{ marginTop: 15, justifyContent: 'space-between' }}>
                                        <Badge color="active" text={`${appointment.date} - ${appointment.time}`} />
                                        <Badge color="green" text={`${appointment.diagnosis} P.`} />
                                    </AppointmentCardRow>
                                </AppointmentCard>
                            )
                        })
                    }
                    
                </Container>
            </PatientAppointments>

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

const PatientDetails = styled.View`
  flex: 0.3;
  padding: 10px;
`;

const PatientFullName = styled.Text`
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 3px;
`;

const PatientButtons = styled.View`
    flex: 1;
    flex-direction: row;
    margin-top: 20px;
`;
            
const GrayText = styled.Text`
    font-size: 16px;
    color: #8b979f;
`;

const FormulaButtonView = styled.View`
    flex: 1;
`;

const PhoneButtonView = styled.View`
    margin-left: 10px;
    width: 45px;
`;

const PatientAppointments = styled.View`
    flex: 1;
    background: #f8fafd;
`;

const Container = styled.View`
  padding: 25px;
  flex: 1;
`;

const AppointmentCard = styled.View`
  shadow-color: gray;
  elevation: 0.5;
  shadow-opacity: 0.4;
  shadow-radius: 10;
  padding: 20px 25px;
  border-radius: 10px;
  background: white;
  margin-bottom: 20px;
`;

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3.5px;
  margin-bottom: 3.5px;
`;

const MoreButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 10px;
  height: 32px;
  width: 32px;
`;

export default PatientScreen;