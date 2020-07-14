import React, { useState } from 'react';
import { View, Text, ToastAndroid, AsyncStorage } from 'react-native';
import styles from '../styles/TodoCard.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../store/actions/index.js';

const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      25,
      50
    );
    return null;
  }
  return null;
};

export default function TodoCard (props) {
  const { todo } = props;
  const dispatch = useDispatch();
  const [toastUpdate, setToastUpdate] = useState(false);

  const markAsDone = () => {
    AsyncStorage.getItem('token')
      .then(result => {
        const payload = {
          id: todo.id,
          title: todo.title,
          description: todo.description,
          status: 'done',
          due_date: todo.due_date
        }
        dispatch(updateTodo(result, payload));
        setToastUpdate(!toastUpdate);
        setTimeout(() => {
          setToastUpdate(!toastUpdate)
        }, 2000)
      })
      .catch(err=> {
        console.log(err)
      });
  }

  return (
    <View style={styles.container}>
      <Toast visible={toastUpdate} message="Sukses mengubah status todo!" />
      <View style={styles.cardBox}>
        <View>
          <Text style={styles.cardTitle}>
            {todo.title}
          </Text>
          <Text style={styles.cardDescription}>
            {todo.description}
          </Text>
          <Text style={todo.status == 'done' ? styles.doneBox : styles.pendingBox}>
            {todo.status}
          </Text>
          {
            todo.status !== 'done' &&
            <TouchableOpacity
              style={styles.buttonBox}
              onPress={markAsDone}
            >
              <Text>
                Mark as Done
              </Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  )
}