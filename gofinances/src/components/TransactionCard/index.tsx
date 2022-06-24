import React from "react";

import { 
   Container,
   Title,
   Amount,
   Footer,
   Category,
   Icon,
   CategoryName,
   Date
 } from "./styles";

 interface Category {
    name: string;
    icon: string;
 }

export interface DataInterface {
    title: string;
    amount: string;
    type: "income" | "outlay";
    category: Category;
    date: string;
}

interface CardProps {
    data: DataInterface;
}

export function TransactionCard({ data } : CardProps){
    return(
        <Container>
            <Title>{data.title}</Title> 

            <Amount type={data.type}>
                { (data.type === "outlay") && "- "}
                {data.amount}
            </Amount>

            <Footer>    
                <Category>
                    <Icon name={data.category.icon} />
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
};