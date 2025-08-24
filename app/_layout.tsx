import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Stack initialRouteName="(drawer)">
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShadowVisible: false,
          headerRight: () => {
            return (
              <Ionicons name="ellipsis-vertical" size={22} color="black" />
            );
          },
        }}
      />
    </Stack>
  );
}
