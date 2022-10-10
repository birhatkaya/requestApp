import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserCard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
      <View>
        <Text>{props.username}</Text>
        <Text>{props.email}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10,
        backgroundColor:'#EEF1FF',
        marginVertical: 5,

    },
    text: {
        fontSize: 20,
        color: 'brown',
    }
})
