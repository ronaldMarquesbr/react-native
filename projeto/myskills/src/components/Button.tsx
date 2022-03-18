import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button( { title ,...rest }: ButtonProps ){
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.65}
            {...rest}
        >
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
    backgroundColor: "#0e79b2",
    borderRadius: 7,
    paddingVertical: 10,
  },
  textButton: {
    fontWeight: "500",
    color: "#fbfef9",
    textAlign: "center"
  }
})