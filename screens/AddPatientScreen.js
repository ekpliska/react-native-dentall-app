import React, { useState } from 'react';
import { View } from 'react-native';
import { Item, Input, Label } from 'native-base';
import Button from '../components/Button';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { patientsApi } from '../utils/api';

const AddPatientScreen = ({ navigation }) => {
    const [values, setValue] = useState({});

    const handleChange = (name, e) => {
        const value = e.nativeEvent.text;
        setValue({
            ...values,
            [name]: value,
        })
    }

    const onSubmit = () => {
        patientsApi
            .add(values)
            .then(() => {
                navigation.navigate('Home');
            })
            .catch(e => {
                alert('Error');
            });
    };

    return (
        <View style={{ padding: 25 }}>
            <Item fixedLabel>
                <Label>Фамилия имя</Label>
                <Input onChange={handleChange.bind(this, 'fullname')} autoFocus clearButtonMode value={values.fullname} />
            </Item>
            <Item fixedLabel>
                <Label>Номер мобильного телефона</Label>
                <Input onChange={handleChange.bind(this, 'phone')} clearButtonMode value={values.phone} dataDetectorTypes="phoneNumber" keyboardType="numeric" />
            </Item>
            <ButtonView>
                <Button color="#84d269" onPress={onSubmit}>
                    <Ionicons style={{ marginRight: 15 }} name="md-add" size={16} color="#ffffff" /> Добавить пациента
                </Button>
            </ButtonView>
        </View>
    )
}

const ButtonView = styled.View`
    flex: 1;
    margin-top: 30px;
`;

AddPatientScreen.navigationOptions = {
    title: 'Добавить пациента',
    headerTintColor: '#2A86FF',
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8
    }
};


export default AddPatientScreen;