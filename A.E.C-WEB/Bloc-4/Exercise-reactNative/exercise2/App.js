import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {

  // Exercice 2: Fonction pour ajouter une tâche au contexte global
  // const addTask = (title) => {
    // ...
  // };

  return (
      <SafeAreaView style={styles.container}>
        <Text> Coucou ! </Text>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
