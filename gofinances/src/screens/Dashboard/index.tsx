import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, DataInterface } from "../../components/TransactionCard";

import { 
    Container, 
    Header,
    UserWrapper,
    ProfileBox,
    Photo,
    User,
    UserName,
    UserGreetings,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionsList
 } from "./styles";

export interface DataListProps extends DataInterface {
    id: string;
}

export function Dashboard(){

    const data : DataListProps[] = [
        {
            id: "1",
            title: "Desenvolvimento de site",
            type: "income",
            amount: "R$ 12.000,00",
            category: { name: "Venda", icon: "dollar-sign" },
            date: "12/04/2021" 
        },
        {
            id: "2",
            title: "Desenvolvimento de site",
            amount: "R$ 12.000,00",
            type: "income",
            category: { name: "Venda", icon: "dollar-sign" },
            date: "12/04/2021" 
        },
        {
            id: "3",
            title: "Pizza",
            amount: "R$ 50,00",
            type: "outlay",
            category: { name: "Alimentacao", icon: "coffee" },
            date: "12/04/2021" 
        },
        {
            id: "4",
            title: "Aluguel",
            amount: "R$ 1.000,00",
            type: "outlay",
            category: { name: "Despesas", icon: "shopping-bag" },
            date: "01/10/2021" 
        }
    ]

    return(
        <Container>
            <Header>
                <UserWrapper>
                    <ProfileBox>
                        <Photo source={{ uri: "https://avatars.githubusercontent.com/u/90390537?v=4" }}></Photo>
                        <User>
                            <UserGreetings>Ola,</UserGreetings>
                            <UserName>Ronald</UserName>
                        </User>
                    </ProfileBox>

                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard
                    title="Entradas"
                    lastTransaction="Ultima entrada dia 13 de abril"
                    amount="R$ 12.200,00"
                    type="up"
                >   
                </HighlightCard>

                <HighlightCard
                     title="Saidas"
                     lastTransaction="Ultima saida dia 20 maio"
                     amount="R$ 1.800,00"
                     type="down"
                >

                </HighlightCard>
                <HighlightCard
                    title="Total"
                    lastTransaction="Ultima saida dia 20 maio"
                    amount="R$ 2.200,00"
                    type="total"
                >
                </HighlightCard>
            </HighlightCards>

            <Transactions>

                <Title>Listagem</Title>

                <TransactionsList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem= {({ item }) => <TransactionCard data={item} />}
                />

            </Transactions>

        </Container>
    )
}