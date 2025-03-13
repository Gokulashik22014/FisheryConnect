import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

const Fisherman = ({ navigation }:{navigation:any}) => {
    const [fishData, setFishData] = useState({
        name: "",
        quantity: "",
        costPerKG: "",
        location: "",
        date: "",
        time: "",
        returnTime: "",
        id: ""
    });

    const staticImageURL = "https://example.com/static-fish-image.jpg"; // Replace with actual URL

    const handleChange = (key:any, value:any) => {
        setFishData({ ...fishData, [key]: value });
    };

    const handleUpload = async () => {
        if (!fishData.name || !fishData.quantity || !fishData.costPerKG || !fishData.location) {
            return Alert.alert("Error", "Please fill all required fields.");
        }

        try {
            const response = await axios.post("http://localhost:3000/fish/upload", {
                ...fishData,
                img: staticImageURL
            });

            if (response.data.status) {
                Alert.alert("Success", "Fish uploaded successfully!");
                navigation.goBack();
            } else {
                Alert.alert("Error", response.data.message);
            }
        } catch (error) {
            Alert.alert("Upload Failed", "Error while uploading fish.");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Upload Fish</Text>

            <TextInput style={styles.input} placeholder="Name" value={fishData.name} onChangeText={(text) => handleChange("name", text)} />
            <TextInput style={styles.input} placeholder="Quantity (kg)" keyboardType="numeric" value={fishData.quantity} onChangeText={(text) => handleChange("quantity", text)} />
            <TextInput style={styles.input} placeholder="Cost per KG" keyboardType="numeric" value={fishData.costPerKG} onChangeText={(text) => handleChange("costPerKG", text)} />
            <TextInput style={styles.input} placeholder="Location" value={fishData.location} onChangeText={(text) => handleChange("location", text)} />
            <TextInput style={styles.input} placeholder="Date (YYYY-MM-DD)" value={fishData.date} onChangeText={(text) => handleChange("date", text)} />
            <TextInput style={styles.input} placeholder="Time (HH:MM)" value={fishData.time} onChangeText={(text) => handleChange("time", text)} />
            <TextInput style={styles.input} placeholder="Return Time (HH:MM)" value={fishData.returnTime} onChangeText={(text) => handleChange("returnTime", text)} />
            <TextInput style={styles.input} placeholder="ID" value={fishData.id} onChangeText={(text) => handleChange("id", text)} />

            <TouchableOpacity style={styles.button} onPress={handleUpload}>
                <Text style={styles.buttonText}>Upload Fish</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f4f4f4"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#ccc"
    },
    button: {
        width: "100%",
        backgroundColor: "#007BFF",
        padding: 15,
        borderRadius: 8,
        alignItems: "center"
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default Fisherman;
