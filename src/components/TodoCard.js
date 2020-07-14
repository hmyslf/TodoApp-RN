import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/TodoCard.js';

export default function TodoCard (props) {
  const { todo } = props;

  return (
    <View style={styles.container}>
      <View style={styles.cardBox}>
        <View>
          <Text style={styles.cardTitle}>
            {todo.title}
          </Text>
          <Text style={styles.cardDescription}>
            {todo.description}
          </Text>
        </View>
      </View>
    </View>
  )
}