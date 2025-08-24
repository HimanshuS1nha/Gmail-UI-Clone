import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerToggleButton } from "@react-navigation/drawer";

const Meet = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#fff8f6] pr-2 pt-1 gap-y-2`}>
      <View style={tw`flex-row justify-between items-center`}>
        <DrawerToggleButton />

        <Text style={tw`text-xl`}>Meet</Text>

        <Pressable
          style={tw`size-8 rounded-full bg-indigo-600 items-center justify-center`}
        >
          <Text style={tw`text-white text-base`}>A</Text>
        </Pressable>
      </View>

      <View style={tw`flex-row gap-x-2 items-center justify-center`}>
        <Pressable
          style={tw`w-[47%] bg-[#8b4e25] items-center justify-center py-2.5 rounded-full`}
        >
          <Text style={tw`text-white font-medium`}>New meeting</Text>
        </Pressable>
        <Pressable
          style={tw`w-[47%] border border-[#8b4e25] items-center justify-center py-2.5 rounded-full`}
        >
          <Text style={tw`text-[#8b4e25] font-medium`}>Join with a code</Text>
        </Pressable>
      </View>

      <View style={tw`flex-1 justify-center items-center gap-y-3`}>
        <Image
          source={require("../../../assets/images/meet.png")}
          style={tw`rounded-full`}
        />

        <Text style={tw`text-2xl`}>Get a link you can share</Text>
        <Text style={tw`w-[60%] text-center`}>
          Tap <Text style={tw`font-medium`}>New meeting</Text> to get a link you
          can send to people you want to meet with
        </Text>
      </View>

      <View style={tw`flex-row justify-center items-center gap-x-1.5`}>
        <View style={tw`size-2.5 rounded-full bg-[#8a4f26]`} />
        <View style={tw`size-2.5 rounded-full bg-[#d8c5bb]`} />
      </View>
    </SafeAreaView>
  );
};

export default Meet;
