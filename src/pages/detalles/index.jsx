import React, { useState } from "react"
import {View, Text, TextInput, TouchableOpacity}  from "react-native"
 
import database from "../../config/firebaseconfig"
import styles from "./style"

export default function Details({navigation, route}){
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
  const idTask = route.params.id
 
  function editTask(description, id){
    database.collection("tareas").doc(id).update({
      description: description,
    })
    navigation.navigate("tareas")
  }
  return(
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
      style={styles.input}
      placeholder="Realizar nueva tarea"
      onChangeText={setDescriptionEdit}
      value={descriptionEdit}
      />
      <TouchableOpacity 
        style={styles.buttonNewTask}
        onPress={()=>{
          editTask(descriptionEdit, idTask)
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}