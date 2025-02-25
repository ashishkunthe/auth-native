import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

function Home() {
  const [quote, setQuote] = useState(getRandomQuote());

  function getRandomQuote() {
    const quotes = [
      "Believe in yourself and all that you are.",
      "The secret of getting ahead is getting started.",
      "Push yourself, because no one else will do it for you.",
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      "Your limitation—it’s only your imagination.",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🏠 Welcome Home!</Text>
      <Text style={styles.subText}>
        Here are some quick links and insights for you:
      </Text>

      {/* Featured Section */}
      <View style={styles.featuredSection}>
        <Text style={styles.featuredTitle}>🔥 Featured Topics</Text>
        <FlatList
          data={[
            { id: "1", title: "React Native Performance Tips" },
            { id: "2", title: "Best UI Libraries for React Native" },
            { id: "3", title: "How to Structure a Large App" },
          ]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.featuredItem}>• {item.title}</Text>
          )}
        />
      </View>

      {/* Motivational Quote */}
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>💡 {quote}</Text>
      </View>

      <TouchableOpacity
        style={styles.refreshButton}
        onPress={() => setQuote(getRandomQuote())}
      >
        <Text style={styles.buttonText}>Get Another Quote</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C3E50", // Dark theme
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#F1C40F", // Gold text
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#BDC3C7", // Light gray text
    textAlign: "center",
    marginBottom: 20,
  },
  featuredSection: {
    backgroundColor: "#34495E",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F1C40F",
    marginBottom: 10,
  },
  featuredItem: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
  quoteContainer: {
    backgroundColor: "#1F2C3B",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  quoteText: {
    fontSize: 16,
    color: "#F1C40F",
    fontStyle: "italic",
    textAlign: "center",
  },
  refreshButton: {
    backgroundColor: "#A67C00", // Gold button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
