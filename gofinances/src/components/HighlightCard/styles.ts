import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
    type: "up" | "down" | "total";
}

export const Container = styled.View<TypeProps>`
    background-color: ${({ type, theme }) => (type === "total") ? theme.colors.secondary : theme.colors.shape};

    border-radius: 10px;
    box-shadow: 0 5px 8px rgba(0,0,0,.05);

    justify-content: space-between;

    width: ${RFValue(300)}px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(38)}px;
    margin: 0 ${RFValue(6)}px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: ${RFValue(20)}px;
`
export const Title = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ type, theme }) => (type === "total") ? theme.colors.shape : theme.colors.title};
    font-size: ${RFValue(20)}px;
`

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;

    ${(props) => props.type === "up" && css`
        color: ${({ theme }) => theme.colors.success}
    `};

    ${(props) => props.type === "down" && css`
        color: ${({ theme }) => theme.colors.attention}
    `};

    ${(props) => props.type === "total" && css`
        color: ${({ theme }) => theme.colors.shape}
    `};
`

export const Content = styled.View`

`
export const Amount = styled.Text<TypeProps>`
    font-size: ${RFValue(28)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ type, theme }) => (type === "total") ? theme.colors.shape : theme.colors.title};
`
export const LastTransaction = styled.Text<TypeProps>`
    color: ${({ type, theme }) => (type === "total") ? theme.colors.shape : theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
`