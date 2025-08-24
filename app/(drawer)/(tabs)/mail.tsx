import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { Unmatched, useLocalSearchParams, useRouter } from "expo-router";

import { mails } from "@/constants/mails";

const Mail = () => {
  const { id } = useLocalSearchParams() as { id: string };
  const router = useRouter();

  const mail = mails.find((mail) => mail.id === id);

  const [isStarred, setIsStarred] = useState(mail?.isStarred ?? false);
  if (!mail) {
    return (
      <SafeAreaView style={tw`flex-1`}>
        <View style={tw`px-3 mt-2`}>
          <Pressable onPress={router.back}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
        </View>

        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-rose-600 text-base font-medium`}>
            Mail not found
          </Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={tw`flex-1 bg-[#fff8f6]`}>
      <View style={tw`flex-row justify-between items-center px-3 mt-2`}>
        <Pressable onPress={router.back}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>

        <View style={tw`flex-row gap-x-5 items-center`}>
          <Ionicons name="archive-outline" size={22} color="black" />
          <Ionicons name="trash-outline" size={22} color="black" />
          <Ionicons name="mail-unread-outline" size={22} color="black" />
          <Ionicons name="ellipsis-vertical" size={22} color="black" />
        </View>
      </View>

      <View style={tw`mt-4 px-4 gap-y-6`}>
        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`flex-row gap-x-2 items-center`}>
            <Text style={tw`text-xl`}>{mail.subject}</Text>
            <View style={tw`px-3 py-1 bg-[#e9e9ec] rounded-full`}>
              <Text style={tw`font-medium text-xs`}>Add label</Text>
            </View>
          </View>

          <Pressable onPress={() => setIsStarred((prev) => !prev)}>
            <Entypo
              name={isStarred ? "star" : "star-outlined"}
              color={isStarred ? "#d08700" : "black"}
              size={20}
            />
          </Pressable>
        </View>

        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`flex-row gap-x-2.5 items-center`}>
            <Image
              source={{ uri: mail.icon }}
              style={tw`size-12 rounded-full`}
            />

            <View style={tw`gap-y-1`}>
              <View style={tw`flex-row gap-x-2 items-center`}>
                <Text style={tw`font-medium text-base`}>{mail.email}</Text>
                <Text style={tw`text-xs`}>{mail.time}</Text>
              </View>

              <Text style={tw`text-gray-700 text-xs`}>
                to myemail@gmail.com
              </Text>
            </View>
          </View>

          <View style={tw`flex-row gap-x-3 items-center`}>
            <Entypo name="emoji-happy" size={22} color="black" />
            <Feather name="corner-up-left" size={22} color="black" />
            <Ionicons name="ellipsis-vertical" size={22} color="black" />
          </View>
        </View>

        <Text style={tw`leading-5`}>{mail.content}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Mail;
