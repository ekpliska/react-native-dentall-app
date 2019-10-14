import React from 'react';
import styled from 'styled-components/native';

const SectionTitle = ({ title }) => {
    return (
        <Title>{title}</Title>
    )
}

const Title = styled.Text`
    font-weight: 800;
    font-size: 22px;
    color: #000000;
    margin-top: 25px;
    padding: 0 20px;
`;

export default SectionTitle;