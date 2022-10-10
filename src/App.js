//then && ctach de bu dosyada
/*promise çözümleme ++ ve async kullanılıyor asenkron etmek 
için fonksiyonun başına async konur ve axios'un başına await eklenir.*/
import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import UserCard from "./components/UserCard/UserCard";
import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    /*const response = await axios.get(URL);
    setLoading(false);
    setUserList(response.data);*/

    axios.get(URL).then(response => {
      setLoading(false);
      setUserList(response.data)
    })
  }

  const renderUser = ({ item }) => (
    <UserCard name={item.name} email={item.email} username={item.username} />
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList data={userList} renderItem={renderUser} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
