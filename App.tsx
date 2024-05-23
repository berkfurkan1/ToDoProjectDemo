/*import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'

export default function App() {
  const [task, setTask]= useState('');
  const [ tasks,setTasks]= useState([]);

  useEffect(() => {
    console.log('Tasks state güncellendi:', tasks);
  }, [tasks]);

  const addTask = () => {//addTask fonksiyonu, kullanıcının yeni bir görev eklemesini sağlar. 
//Bu satır, task değişkeninin boş olup olmadığını kontrol eder. Eğer kullanıcı bir görev metni girmediyse, görev ekleme işlemi yapılmaz.
    if (task.length > 0){
//setTasks fonksiyonu, mevcut görevler listesine yeni bir görev eklemek için kullanılır. 
//[...tasks], mevcut tasks listesinin kopyasını oluşturur.
//{ text: task, completed: false }, yeni görevi temsil eden bir nesnedir. text özelliği, kullanıcının girdiği görevi içerir ve completed özelliği, görevin tamamlanmamış olduğunu belirtir.
      setTask([...tasks,{text: task, completed: false}]);
//Bu satır, task değişkenini boş bir string yaparak, görev ekledikten sonra giriş alanının temizlenmesini sağlar.
      
      setTask('');
    }
  };

  const toggleTask = (index) => {//toggleTask fonksiyonu, kullanıcının bir görevin tamamlanma durumunu değiştirmesini sağlar.
//newTasks, mevcut tasks listesinin bir kopyasıdır. 
//------------
    console.log('toggleTask çağrıldı. Index:', index); // Eklendi
    console.log('Mevcut görevler:', tasks); // Eklendi
//-----------
    let newTasks = [...tasks];
//index parametresi, hangi görevin tamamlanma durumunun değiştirileceğini belirtir.
//newTasks[index].completed, ilgili görevin tamamlanma durumunu alır.
//!newTasks[index].completed, mevcut durumu tersine çevirir (tamamlanmışsa tamamlanmamış yapar, tamamlanmamışsa tamamlanmış yapar).
    newTasks[index].completed = !newTasks[index].completed;
//setTasks fonksiyonu, güncellenmiş newTasks listesini kullanarak tasks state'ini günceller.    
    setTasks(newTasks);
    console.log('Güncellenmiş görevler:', newTasks); // Eklendi
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODO</Text>
      <View style={styles.taskCountContainer}>
        <Text style={styles.taskCountText}>Yapılacaklar: {tasks.length}</Text>
      </View>
      <FlatList 
        style={styles.taskList}
        data={tasks}
        renderItem={({item, index}) =>(
          <TouchableOpacity 
            style={[styles.taskItem, item.completed && styles.taskItemCompleted]}
            onPress={() => toggleTask(index)}
          >
            <Text style={styles.taskText}>{item.text}</Text>
          </TouchableOpacity>
            
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='görev girin'
          value={task}
          onChangeText={text =>setTask(text)}
        />
        <Button title='kaydet' onPress={addTask}/>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:20,
  },
  header:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20,
  },
  taskCountContainer:{
    marginBottom:20,
  },
  taskCountText:{
    fontSize:18,
  },
  taskList:{
    flex:1,
    marginBottom:20,
  },
  taskItem:{
    padding:10,
    borderWidth:1,
    borderColor:'#ddd',
    borderRadius:5,
    marginBottom:10,

  },
  taskText:{
    fontSize:16,
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    flex:1,
    borderWidth:1,
    borderColor:'#ddd',
    borderRadius:5,
    padding:10,
    marginRight:10,
  },






})*/

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]); // Initial state is an empty array

  // useEffect to log tasks state updates
  useEffect(() => {
    console.log('Tasks state güncellendi:', tasks);
  }, [tasks]);

  // addTask function to add new tasks
  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  // toggleTask function to toggle task completion
  const toggleTask = (index) => {
    console.log('toggleTask çağrıldı. Index:', index);
    console.log('Mevcut görevler:', tasks);

    let newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);

    console.log('Güncellenmiş görevler:', newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODO</Text>
      <View style={styles.taskCountContainer}>
        <Text style={styles.taskCountText}>Yapılacaklar: {tasks.length}</Text>
      </View>
      <FlatList
        style={styles.taskList}
        data={tasks}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[styles.taskItem, item.completed && styles.taskItemCompleted]}
            onPress={() => {
              console.log('Görev tıklandı:', index);
              toggleTask(index);
            }}
          >
            <Text style={[styles.taskText, item.completed && styles.taskTextCompleted]}>
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Görev girin"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <Button title="Kaydet" onPress={addTask} />
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  taskCountContainer: {
    marginBottom: 20,
  },
  taskCountText: {
    fontSize: 18,
  },
  taskList: {
    flex: 1,
    marginBottom: 20,
  },
  taskItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  taskItemCompleted: {
    backgroundColor: '#d3d3d3',
  },
  taskText: {
    fontSize: 16,
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});
