import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill ,...rest}: SkillCardProps ){
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            {...rest}
        >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
      backgroundColor: "#1F1e25",
      borderRadius: 50,
      marginVertical: 10,
      alignItems: "center"
    },
    textSkill: {
      color: "#FFF",
      padding: 15,
      fontWeight: "500"
    }
})