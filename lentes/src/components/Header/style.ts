import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    height: ${RFPercentage(42)}px;
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary_light};

    display: flex;
    align-items: center;
`;

export const TitleText = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(26)}px;
    text-align: center;
    margin: ${RFValue(20)}px;
`;