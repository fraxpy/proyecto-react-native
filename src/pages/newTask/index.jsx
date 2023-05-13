import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from '../../config/firebaseconfig.js'
import styles from "./style.js";

export default function NewTask({ navigation }, props) {

  const [description, setDescription] = useState(null);

  function addTask(){
    database.collection('tareas').add({
      description: description,
      status: false
    })
    navigation.navigate("tareas");
  }

  return(
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
      style={styles.input}
      placeholder="Nueva Tarea"
      onChangeText={setDescription}
      value={description}
      />
      <TouchableOpacity 
        style={styles.buttonNewTask}
        onPress={()=>{
          addTask()
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}