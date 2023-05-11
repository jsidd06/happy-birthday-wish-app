import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";

export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = () => {
    setShowCard(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Happy Birthday!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter recipient's name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your message"
        onChangeText={(text) => setMessage(text)}
        value={message}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send Birthday Wishes</Text>
      </TouchableOpacity>
      {showCard && (
        <Card>
          <Text style={styles.cardTitle}>Dear {name},</Text>
          <Text style={styles.cardMessage}>{message}</Text>
          <Text style={styles.cardFooter}>
            Best wishes on your special day!
          </Text>
        </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0080ff",
    borderRadius: 4,
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardMessage: {
    fontSize: 16,
    marginBottom: 10,
  },
  cardFooter: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "right",
  },
});
