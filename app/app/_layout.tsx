import { View, Text } from "react-native";
import { Stack } from "expo-router";

import React from "react";

const MainLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="signin" options={{ title: 'Signin' }} />
      <Stack.Screen name="fisherman" options={{ title: 'Fisherman' }} />
      <Stack.Screen name="customer" options={{ title: 'Customer' }} />
    </Stack>
  );
};

export default MainLayout;