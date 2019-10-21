import React from 'react';
import styled from 'styled-components/native';

const colors = {
    green: {
        background: 'rgba(132, 210, 105, 0.21)',
        color: '#61BB42'
    },
    active: {
        background: '#2A86FF',
        color: '#fff'
    },
    default: {
        background: '#E9F5FF',
        color: '#4294ff'
    }
};

export const Badge = ({ color, text }) => {
    return (
        <Label color={color}>{text}</Label>
    )

};

const Label = styled.Text`
    background:  ${props => (props.color ? colors[props.color].background : colors[props.color].background)};
    color:  ${props => (props.color ? colors[props.color].color : colors[props.color].color)};
    border-radius: 18px;
    font-weight: 600;
    font-size: 14px;
    height: 32px;
    text-align: center;
    line-height: 34px;
    padding: 0 10px;
`;