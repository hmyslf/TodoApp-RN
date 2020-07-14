import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import styles from '../styles/landingpage.js';
import { useNavigation } from '@react-navigation/native';
import server from '../api/index.js';

export default function LandingPage () {
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('token').then((result) => {
      if(result) {
        navigation.navigate('Home')
      }
    });
  }, []);

  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [textRegLog, setText] = useState('Belum Punya Akun? Daftar');
  const [errorText, setError] = useState('');
  const [successText, setSuccess] = useState('');

  const registerMsg = () => {
    if(register) {
      return (
        <View>
          <Text style={styles.textSmall}>Register</Text>
        </View>
      )
    } else {
      return (
        <View>
          <Text style={styles.textSmall}>Login</Text>
        </View>
      )
    }
  }

  const registerPass = () => {
    if(register) {
      return (
        <TextInput
          style={styles.inputBox}
          placeholder="Ulangi Password"
          placeholderTextColor="#828282"
          secureTextEntry={true}
          onChange={(e) => setConfirmPassword(e.nativeEvent.text)}
        />
      )
    }
  }

  const toggleLogin = () => {
    setRegister(!register);
    if(register) setText('Belum Punya Akun? Daftar');
    if(!register) setText('Sudah Punya Akun? Login')
  }

  const handleLogin = () => {
    if(register) {
      if(email && password && confirmPassword) {
        if(password == confirmPassword) {
          return server.post('/register', {
            email,
            password
          })
            .then((result) => {
              setRegister(!register);
              setEmail('');
              setPassword('');
              setConfirmPassword('');
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      } else {
        setError('Please fill in all the fields');
        setTimeout(() => {
          setError('')
        }, 2000)
      }
    } else {
      if(email && password) {
        return server.post('/login', {
          email,
          password
        })
          .then(({ data }) => {
            if(data.token) {
              AsyncStorage.setItem('token', data.token);
              setEmail('');
              setPassword('');
              setConfirmPassword('');
              navigation.navigate('Home')
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        setError('Please fill in all the fields');
        setTimeout(() => {
          setError('')
        }, 2000)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TodoApps</Text>
      {registerMsg()}
      <TextInput
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor="#707070"
          onChange={(e) => setEmail(e.nativeEvent.text)}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          placeholderTextColor="#707070"
          secureTextEntry={true}
          onChange={(e) => setPassword(e.nativeEvent.text)}
        />

        {registerPass()}

        <TouchableOpacity style={styles.buttonBox} onPress={handleLogin}>
          <View>
            <Text style={{ color: 'white', fontSize: 16 }}>
              {register ? 'Daftar' : 'Masuk'}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleLogin} style={{ marginTop: 8 }}>
          <Text style={{ color: '#323232' }}>{textRegLog}</Text>
        </TouchableOpacity>
    </View>
  )
}