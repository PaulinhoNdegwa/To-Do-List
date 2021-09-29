import React, { useState } from "react";
import { Button, Keyboard, StyleSheet, Text, TextInput, View } from "react-native";

const AddTodo = ({ submitTodo }) => {
    const [text, setText] = useState("");
    const changeHander = (value) => {
        setText(value)
    }

    const handleSubmit = () => { 
        submitTodo(text); 
        // setText('');
        Keyboard.dismiss();
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter to-do item"
                onChangeText={changeHander}
                value={text}
            />
            <Button onPress={() => handleSubmit()} title="Add to-do" color='coral' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodo;