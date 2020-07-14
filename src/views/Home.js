import React, { useEffect } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/actions';
import styles from '../styles/Home.js';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import TodoCard from '../components/TodoCard';
import { useNavigation } from '@react-navigation/native';

export default function Home () {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(result => {
        dispatch(fetchTodos(result));
      })
      .catch(err => {
        console.log(err)
      });
  }, [dispatch]);

  const showModalAdd = () => {
    navigation.navigate('AddTodo');
  }

  const myTodos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading);

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      <TouchableOpacity
        style={styles.buttonBox}
        onPress={showModalAdd}
      >
        <Text>
          Add Todo
        </Text>
      </TouchableOpacity>
      <ScrollView>
        {
          myTodos.map((todo) => {
            return <TodoCard key={todo.id} todo={todo} />
          })
        }
      </ScrollView>
    </View>
  )
}