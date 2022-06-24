import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
`;

export const Card = styled.View`
    width: 95%;
    min-height: ${RFPercentage(80)}px;
    border-radius: ${RFValue(18)}px;
    box-shadow: ${RFValue(12)}px 0 ${RFValue(10)}px rgba(0,0,0,.12);

    padding: ${RFValue(32)}px ${RFValue(16)}px;
    
    background-color: ${({theme}) => theme.colors.shape};
    position: relative;
    top: -${RFPercentage(25)}px;

    display: flex;
`;


export const TitleCard = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.title};
    margin-bottom: ${RFValue(16)}px;
`;

export const Slide = styled.TouchableOpacity`
    width: 49%;
    height: ${RFValue(100)}px;
    background-color: ${({theme}) => theme.colors.dark};
    margin-bottom: ${RFValue(10)}px;
    border-radius: ${RFValue(12)}px;

    padding: ${RFValue(10)}px;
`

export const SlideGrid = styled.View`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`

export const SlideText = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.shape};

`
export const Menu = styled.View`
`