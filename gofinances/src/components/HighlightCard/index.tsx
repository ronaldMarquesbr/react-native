import React, { ReactNode } from "react";
import {
    Container,
    Header,
    Title,
    Icon,
    Content,
    Amount,
    LastTransaction
} from "./styles"

interface CardProps {
    children: ReactNode;
    title: string;
    amount: string;
    lastTransaction: string;
    type: "up" | "down" | "total";
}

const icon = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
    total: "dollar-sign"
}

export function HighlightCard({ title, amount, lastTransaction, type } : CardProps){
    return(
        <Container type={type}>
            <Header>
                <Title type={type}>{title}</Title>
                <Icon type={type} name={icon[type]}></Icon>
            </Header>

            <Content>
                <Amount type={type}>{amount}</Amount>
                <LastTransaction type={type}>{lastTransaction}</LastTransaction>
            </Content>

        </Container>
    )
}