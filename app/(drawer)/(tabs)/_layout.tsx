import { Tabs } from "expo-router";
import tw from "twrnc";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <GestureHandlerRootView>
      <Tabs
        screenOptions={{
          tabBarStyle: { backgroundColor: "#feeadf" },
          title: "",
          headerShown: false,
        }}
        initialRouteName="[type]"
      >
        <Tabs.Screen
          name="[type]"
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <>
                  {focused ? (
                    <Ionicons
                      name="mail-sharp"
                      size={size}
                      style={tw`${focused ? "" : ""}`}
                    />
                  ) : (
                    <Feather name="mail" size={size} color={"black"} />
                  )}
                </>
              );
            },
          }}
        />

        <Tabs.Screen
          name="meet"
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <>
                  {focused ? (
                    <Ionicons
                      name="videocam"
                      size={size}
                      style={tw`${focused ? "" : ""}`}
                    />
                  ) : (
                    <Ionicons
                      name="videocam-outline"
                      size={size}
                      color={"black"}
                    />
                  )}
                </>
              );
            },
          }}
        />

        <Tabs.Screen name="mail" options={{ href: null }} />
      </Tabs>
    </GestureHandlerRootView>
  );
}
