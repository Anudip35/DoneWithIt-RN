import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Monkey D. Luffy",
    description: "Yo Zoro! Let's Catch some fish!!",
    image: require("../assets/luffy.jpg"),
  },
  {
    id: 2,
    title: "Monkey D. Luffy",
    description: "Oy Sanji! Can you make more meat sticks?",
    image: require("../assets/luffy.jpg"),
  },
  {
    id: 3,
    title: "Monkey D. Luffy",
    description: "Look Chopper, Usopp!",
    image: require("../assets/luffy.jpg"),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({});
