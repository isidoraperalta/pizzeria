import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { CustomInput } from "@/components/ui/CustomInput";
import { CustomButton } from "@/components/ui/CustomButton";
import { useLogin } from "@/hooks/useLogin";

export default function LoginScreen() {
  const { email, setEmail, password, setPassword, isLoading, handleLogin } = useLogin();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <CustomInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <CustomInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomButton
        title="Iniciar Sesión"
        onPress={handleLogin}
        isLoading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    textAlign: "center",
    marginBottom: 40,
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
});