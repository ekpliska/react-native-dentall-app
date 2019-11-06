import React from 'react';
import styled from 'styled-components/native';

const Button = ({ children, color, onPress }) => {
    return (
        <ButtonWrapper color={color} onPress={onPress}>
            <ButtonText>
                {children}
            </ButtonText>
        </ButtonWrapper>
    )
}

Button.defaultProps  = {
    color: '#2a86ff',
};

const ButtonWrapper = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: ${props => props.color};
    height: 45px;
`;

const ButtonText = styled.Text`
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
`;

export default Button;