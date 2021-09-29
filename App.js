import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Get groceries", key: '1' },
    { text: "Go to church", key: '2' },
    { text: "Write code", key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.key !== key))
  }

  const submitTodo = (todo) => {
    if (todo.length > 3) {
      setTodos((prevTodos) => {
        return [...prevTodos, { text: todo, key: Math.random().toString() }]
      })
    } else {
      Alert.alert("OOPS!", "To-dos must be over 3 chars long", [
        { text: 'Understood', onPress: () => console.log("Alert closed") }
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitTodo={submitTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => {
                return <TodoItem item={item} pressHandler={pressHandler} />
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 15
  },
  list: {
    flex: 1,
    marginTop: 10,
    paddingVertical: 10
  }
});
