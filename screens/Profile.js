import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

function Profile() {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image
        source={{
          uri: "https://www.w3schools.com/howto/img_avatar.png",
        }}
        style={styles.profileImage}
      />

      {/* User Details */}
      <Text style={styles.name}>Ashish Kunthe</Text>
      <Text style={styles.email}>ashish@example.com</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.buttonText}>Edit Profile</Text>
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
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#F1C40F", // Gold border
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F1C40F", // Gold text
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#BDC3C7", // Light gray text
    marginBottom: 20,
  },
  editButton: {
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

export default Profile;
