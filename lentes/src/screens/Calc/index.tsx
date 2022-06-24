import React, {useState} from "react";

import {
    Input,
    InputContainer,
    Label,
    CalcButton,
    ButtonLabel,
    ReturnButton,
    ReturnButtonLabel,
    LabelResult

} from "./styles"

interface CalcProps {
    returnFunction: (value : boolean) => void;
    campo: Number;
}

export function Calc({returnFunction, campo}: CalcProps){

    const [distFocal, setDistFocal] = useState("");
    const [refraLente, setRefraLente] = useState("");
    const [refraMeio, setRefraMeio] = useState("");
    const [raio1, setRaio1] = useState("");
    const [raio2, setRaio2] = useState("");

    

    const [res, setRes] = useState("");

    function volta(){
        returnFunction(false);
        setRes("");
    }

    function resultado(num: Number){
        // let teste = refraLente.split(``).filter(n => Number(n) || n == false).join(``);
        if(Number(refraLente) && Number(refraMeio) && Number(raio1) && Number(raio2) && (num == 1) ){
            let prev = `A distância focal é de ${(((parseInt(refraLente) / parseInt(refraMeio)) - 1) * ((1 / parseInt(raio1)) + (1 / parseInt(raio2))) / 1).toFixed(2)}`;
            setRes(prev);
        } else if(Number(distFocal) && Number(refraMeio) && Number(raio1) && Number(raio2) && (num == 2) ) {
            let prev = `O Indice de refracao é de ${ ((((1 / parseInt(distFocal)) / ((1 / parseInt(raio1)) + (1 / parseInt(raio2)))) + 1) * parseInt(refraMeio)).toFixed(2)}`;
            setRes(prev);
        } else {
            return;
        }
    }

    return(
        <>
            <ReturnButton onPress={() => returnFunction(false)}>
                <ReturnButtonLabel>voltar</ReturnButtonLabel>
            </ReturnButton>
            {
                (campo == 1)||
                <InputContainer>
                    <Label>Distância focal</Label>
                    <Input 
                        placeholderTextColor="#B2B2B2"
                        onChangeText={setDistFocal}
                    />
                </InputContainer>

            }

            {
                (campo == 2) ||
                <InputContainer>
                <Label>Índice de refração da lente</Label>
                    <Input 
                        placeholderTextColor="#B2B2B2"
                        onChangeText={setRefraLente}
                    />
                </InputContainer>
            }
            
            {
                (campo == 3) ||
                <InputContainer >
                <Label>Índice de refração do meio</Label>
                <Input 
                    placeholderTextColor="#B2B2B2"
                    onChangeText={setRefraMeio}
                />
                </InputContainer>
            }
            
            {
                (campo == 4) ||
                <InputContainer>
                    <Label>Raio de curvatura(R1)</Label>
                    <Input 
                        placeholderTextColor="#B2B2B2"
                        onChangeText={setRaio1}
                    />
                </InputContainer>
            }
            
            {
                (campo == 5 ) ||
                <InputContainer>
                <Label>Raio de curvatura(R2)</Label>
                <Input 
                    placeholderTextColor="#B2B2B2"
                    onChangeText={setRaio2}
                />
            </InputContainer>
            }
            
            <CalcButton
                activeOpacity={.7}
                onPress={() => {resultado(campo)}}
            >
                <ButtonLabel>Calcular</ButtonLabel>
            </CalcButton>
            <LabelResult>{res}</LabelResult>
        </> 
    )
};