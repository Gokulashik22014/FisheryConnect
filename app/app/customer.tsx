import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from "react-native";
import axios from "axios";

const CustomerScreen = () => {
  const [fishes, setFishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFishes();
  }, []);

  const fetchFishes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/customer/allfish");
      setFishes(response.data);
    } catch (error) {
      console.error("Failed to fetch fishes", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="blue" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Fishes</Text>
      <FlatList
        data={fishes}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>Quantity: {item.quantity} kg</Text>
            <Text style={styles.details}>Cost: ${item.costPerKG} per kg</Text>
            <Text style={styles.details}>Location: {item.location}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "#555",
  },
});

export default CustomerScreen;
