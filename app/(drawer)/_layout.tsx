import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { usePathname, useRouter } from "expo-router";

import { drawerItems } from "@/constants/drawer-items";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <DrawerContentScrollView {...props} style={tw`bg-[#f5eae4]`}>
      <View style={tw`border-b-[0.4px] pb-5`}>
        <Text style={tw`text-orange-500 text-base font-medium`}>Gmail</Text>
      </View>

      {drawerItems.map((item, i) => {
        return (
          <View
            key={i}
            style={tw`${item.showBorder ? "border-b-[0.4px]" : ""} py-2`}
          >
            {item.title.length > 0 && (
              <Text style={tw`px-3 mb-1.5`}>{item.title}</Text>
            )}

            {item.items.map((ele) => {
              return (
                <DrawerItem
                  label={ele.title}
                  key={ele.title}
                  onPress={() => {
                    if (ele.url) {
                      router.push(ele.url as any);
                    }
                  }}
                  icon={({ color, size }) => (
                    <ele.Icon
                      name={ele.iconName as any}
                      color={color}
                      size={size}
                    />
                  )}
                  focused={pathname === ele.url}
                  activeTintColor="black"
                  activeBackgroundColor="#ffdac7"
                />
              );
            })}
          </View>
        );
      })}
    </DrawerContentScrollView>
  );
};

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerStyle: { width: 320 },
        }}
        drawerContent={CustomDrawer}
        initialRouteName="(tabs)"
      />
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
