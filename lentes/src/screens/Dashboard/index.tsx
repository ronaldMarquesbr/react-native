import React, {useState} from "react";

import {
    Card,
    Container,
    TitleCard,
    Slide,
    SlideGrid,
    SlideText,
    Menu
} from "./styles"

import { Header } from "../../components/Header";
import { Calc } from "../Calc";
export function Dashboard(){

    const [showCalc, setShowCalc] = useState(false);
    const [campo, setCampo] = useState(0);

    function handleShowCalc(value: boolean){
        setShowCalc(value);
    }

    function rodar(num: number){
        setShowCalc(true);
        setCampo(num)
    }

    return(
        <Container>
            <Header />
            <Card>
                { showCalc ? 
                    <Calc returnFunction={handleShowCalc} campo={campo} />
                    :
                    <Menu>
                    <TitleCard>
                        Cálculos
                    </TitleCard>
                    <SlideGrid>
                        <Slide onPress={() => rodar(1)}>
                            <SlideText>Distancia focal</SlideText>
                        </Slide >
                        <Slide onPress={() => rodar(3)}>
                            <SlideText>Indice de refracao do meio</SlideText>
                        </Slide>
                        <Slide onPress={() => rodar(2)}>
                            <SlideText>Indice de refracao da lente</SlideText>
                        </Slide>
                        <Slide onPress={() => rodar(4)}>
                            <SlideText>Raio de Curvatura(R1)</SlideText>
                        </Slide>
                        <Slide onPress={() => rodar(5)}>
                            <SlideText>Raio de Curvatura(R2)</SlideText>
                        </Slide>
                        
                    </SlideGrid>
                </Menu>
                }
                
            </Card>
        </Container>
    )
};