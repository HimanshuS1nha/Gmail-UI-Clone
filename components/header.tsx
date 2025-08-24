import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { DrawerToggleButton } from "@react-navigation/drawer";

const Header = () => {
  return (
    <View
      style={tw`bg-[#fae4d9] mx-4 rounded-full py-2 pl-1 pr-3 flex-row justify-between items-center`}
    >
      <View style={tw`flex-row gap-x-2.5 items-center`}>
        <DrawerToggleButton />

        <TextInput placeholder="Search in mail" style={tw`p-0 text-base`} />
      </View>

      <Pressable
        style={tw`size-8 rounded-full bg-indigo-600 items-center justify-center`}
      >
        <Text style={tw`text-white text-base`}>A</Text>
      </Pressable>
    </View>
  );
};

export default Header;
