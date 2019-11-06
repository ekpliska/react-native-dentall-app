import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import getAvatarColor from '../utils/getAvatarColor';

const Group = ({ navigate, item }) => {
    const { patient, user, diagnosis, active, time } = item;
    const colorAvatar = getAvatarColor(patient.fullname[0].toUpperCase());
    return (
        <GroupItem onPress={navigate.bind(this, 'Patient', item)}>
            <Avatar style={{ backgroundColor: colorAvatar.background}}>
                <Letter style={{ color: colorAvatar.color }}>
                    {patient.fullname[0].toUpperCase()}
                </Letter>
            </Avatar>
            <View style={{ flex: 1 }}>
                <FullName>{patient.fullname}</FullName>
                <GrayText>{diagnosis}</GrayText>
            </View>
            <GroupDate active={active}>{time}</GroupDate>
        </GroupItem>
    );
};

Group.defaultProps = {
    groupTitle: 'Untitle',
    items: []
};

const GroupItem = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    padding: 20px;
    border-bottom-width: 1px;
    border-bottom-color: #f3f3f3;
`;

const Avatar = styled.View`
    border-radius: 50px;
    width: 40px;
    height: 40px;
    margin-right: 15px;
    align-items: center;
    justify-content: center;
`;

const Letter = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

const FullName = styled.Text`
    font-weight: 600;
    font-size: 16px;
`;

const GrayText = styled.Text`
    font-size: 16px;
    color: #8b979f;
`;

const GroupDate = styled.Text`
    background: ${props => (props.active ? '#2A86FF' : '#e9f5ff')};
    color: ${props => (props.active ? '#ffffff' : '#4294ff')};
    border-radius: 18px;
    font-weight: 600;
    font-size: 14px;
    width: 70px;
    height: 25px;
    text-align: center;
    line-height: 28px;
`;

export default Group;