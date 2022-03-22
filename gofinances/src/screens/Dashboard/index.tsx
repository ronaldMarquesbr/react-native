import React from "react";

import { Text, View } from "react-native";

import { 
    Container, 
    Header,
    UserWrapper,
    ProfileBox,
    Photo,
    User,
    UserName,
    UserGreetings
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
                </UserWrapper>
            </Header>
        </Container>
    )
}