import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Platform, FlatList } from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface Skill {
  id: string;
  name: string;
}

export function Home(){

  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<Skill[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill(){

    if(newSkill === ""){
      return;
    }

    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [...oldState, data])
  }

  function handleRemoveSkill(id: string){
    const updatedSkills = mySkills.filter(skill => skill.id !== id);
    setMySkills(updatedSkills)
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if(currentHour < 12){
      setGreeting("Bom dia");
    }
    else if (currentHour >= 12 && currentHour < 18){
      setGreeting("Boa tarde");
    } else {
      setGreeting("Boa noite");
    }
  }, [])

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome, Ronald.</Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#666"
        onChangeText={setNewSkill}
      />

      <Button 
        title="Add"
        onPress={handleAddNewSkill}
      />

      <Text
        style={[styles.title, {marginVertical: 30, fontWeight: "bold"}]}
      >
        My Skills
      </Text> 

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard onPress={ () => handleRemoveSkill(item.id)} skill={item.name} />
        )}
      />
          
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    fontWeight: "bold",
    backgroundColor: "#191923",
    paddingVertical: 35,
    paddingHorizontal: 20 
  }, 
  title: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 15,
  }, 
  input: {
    backgroundColor: "#1F1e25",
    borderRadius: 7,
    color: "#FFF",
    fontWeight: "300",
    fontSize: 15,
    marginTop: 30,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == "ios" ? 15 : 10,
  },
  greeting: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "300"
  }
})
