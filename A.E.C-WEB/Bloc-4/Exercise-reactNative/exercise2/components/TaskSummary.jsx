import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskSummary() {
  // Récupérer les tâches depuis le contexte
  // ...
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre total de tâches : {tasks.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 20,
  },
});
