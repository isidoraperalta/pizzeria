import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useAuth } from "@/contexts/AuthContext";

export default function HomeScreen() {
  const { email } = useAuth();
  const [welcomeMessage, setWelcomeMessage] = useState<string>("");

  useEffect(() => {
    if (email) {
      setWelcomeMessage(`¡Bienvenido, ${email}!`);
    } else {
      setWelcomeMessage("¡Bienvenido!");
    }
  }, [email]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>{welcomeMessage}</Text>
      <Text style={styles.description}>
        Esta es la pantalla principal de la aplicación.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: "#007AFF",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
});
