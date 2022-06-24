import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const InputContainer = styled.View`
    display: flex;
    flex-direction: column;

    margin-bottom: ${RFValue(10)}px;
`

export const Label = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.regular};
    margin-bottom: ${RFValue(6)}px;
`;
export const ButtonLabel = styled.Text`
    font-size: ${RFValue(16)}px;
    color: #FFF;
    font-family: ${({theme}) => theme.fonts.regular};
    text-align: center;
`;

export const Input = styled.TextInput`
    border: solid ${RFValue(2)}px ${({theme}) => theme.colors.primary};
    padding: ${RFValue(6)}px ${RFValue(4)}px;
    border-radius: ${RFValue(6)}px;
`;

export const CalcButton = styled.TouchableOpacity`
    width: 100%;
    padding: ${RFValue(8)}px ${RFValue(6)}px;
    background-color: ${({theme}) => theme.colors.dark};
    border-radius: ${RFValue(6)}px;
`;

export const ReturnButton = styled.TouchableOpacity`
    align-self: flex-end;
`
export const ReturnButtonLabel = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.dark};
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const LabelResult = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.dark};
    font-family: ${({theme}) => theme.fonts.bold};
    text-align: center;
    margin-top: ${RFValue(18)}px;
`