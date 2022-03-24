import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

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
    Title
 } from "./styles";

export function Dashboard(){
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

                <TransactionCard />

            </Transactions>

        </Container>
    )
}