import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, AsyncStorage, Picker } from 'react-native';
import styles from '../styles/AddTodo.js';
import { useNavigation } from '@react-navigation/native';
import server from '../api/index.js';
import DatePicker from 'react-native-datepicker';
import { useDispatch } from 'react-redux';
import { fetchTodos, addNewTodo } from '../store/actions/index.js';

export default function AddTodo () {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [due_date, setDueDate] = useState('');

  const submitTodo = () => {
    let token = '';
    AsyncStorage.getItem('token')
      .then(result => {
        token = result;
        const payload = {
          title,
          description,
          status,
          due_date
        }
        dispatch(addNewTodo(token, payload));
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log(err.message)
      });
  }

  const cancel = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.inputBox}
          placeholder="Title"
          placeholderTextColor="#828282"
          multiline={true}
          onChange={(e) => setTitle(e.nativeEvent.text)}
          value={title}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Deskripsi"
          placeholderTextColor="#828282"
          multiline={true}
          onChange={(e) => setDescription(e.nativeEvent.text)}
          value={description}
        />

        <Picker
          selectedValue={status}
          style={styles.inputBox}
          onValueChange={(itemValue) => setStatus(itemValue)}
        >
          <Picker.Item label="Pending" value="pending" />
          <Picker.Item label="Done" value="done" />
        </Picker>

        <DatePicker
          style={styles.inputDate}
          date={due_date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="Pilih Tanggal"
          format="YYYY-MM-DD"
          minDate={new Date()}
          maxDate="2026-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDueDate(date);
          }}
        />

        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={submitTodo}>
          <Text style={styles.buttonCancle}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={cancel}>
            <Text style={styles.buttonSubmit}>Batal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}