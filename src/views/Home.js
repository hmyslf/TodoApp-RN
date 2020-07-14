import React, { useEffect } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/actions';

export default function Home () {
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(result => {
        dispatch(fetchTodos(result));
      })
      .catch(err => {
        console.log(err)
      });
  }, [dispatch]);

  const myTodos = useSelector((state) => state.todos);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(myTodos)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
