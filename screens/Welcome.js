import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

function Welcome({ navigation }) {
  function handleNav() {
    navigation.navigate("SignUp");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the App</Text>
      <Text style={styles.subtitle}>Your journey starts here</Text>
      <TouchableOpacity style={styles.button} onPress={handleNav}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C3E50", // Classic Dark Blue
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F1C40F", // Gold Color
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#ECF0F1", // Soft White for Contrast
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#A67C00", // Deep Gold Button
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Welcome;
