import styled from "styled-components/native";

import { Feather } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    padding: 20px;

    border-radius: 5px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(14)}px;
`;
export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.success};
    font-size: ${RFValue(16)}px;

    margin-top: ${RFValue(2)}px;
`;
export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: ${RFValue(19)}px;
`;
export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;  
export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
    
    margin-right: ${RFValue(17)}px;
`;
export const CategoryName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
`;
export const Date = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
`;