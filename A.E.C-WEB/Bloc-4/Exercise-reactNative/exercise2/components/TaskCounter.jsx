import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function TaskCounter() {

  // Ajouter les variables d'état pour stocker les tâches, titre de la tâche, message de confirmation

  // Fonction ajoutant une nouvelle tâche via le contexte
  const handleAddTask = () => {
    const title = newTaskTitle.trim();
    if (title !== '') {
      // ...
    }
  };

  // useEffect pour faire disparaître le message de confirmation après quelques secondes
  // useEffect(...)


  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Mes tâches</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nouvelle tâche"
          value={newTaskTitle}
          onChangeText={setNewTaskTitle}
        />
        <Button title="Ajouter" onPress={handleAddTask} />
      </View>
      <ScrollView style={styles.tasksContainer}>
        {tasks.map(task => (
          <Text style={styles.taskItem} key={task.id}>
            {task.title}
          </Text>
        ))}
        {confirmationMessage !== '' && (
          <Text style={styles.confirmation}>{confirmationMessage}</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 20, 
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24, 
    marginBottom: 20,
  },
  confirmation: {
    backgroundColor: '#e0ffe0',
    color: '#006600',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1, 
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    padding: 10,
  },
  tasksContainer: {
    marginTop: 10,
  },
  taskItem: {
    fontSize: 18,
    marginBottom: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
});
