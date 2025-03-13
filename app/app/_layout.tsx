import { View, Text } from "react-native";
import { Stack } from "expo-router/stack";

import React from "react";

const MainLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="fisherman" options={{ title: 'Fisherman' }} />
    </Stack>
  );
};

export default MainLayout;