import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const MailPreview = ({
  mail,
}: {
  mail: {
    id: string;
    by: string;
    icon: string;
    subject: string;
    content: string;
    time: string;
    isStarred: boolean;
  };
}) => {
  const router = useRouter();

  const [isStarred, setIsStarred] = useState(mail.isStarred);
  return (
    <Pressable
      style={tw`flex-row gap-x-3 mb-7`}
      onPress={() =>
        router.push({ pathname: "/mail", params: { id: mail.id } })
      }
    >
      <Image
        source={{ uri: mail.icon }}
        style={tw`size-12 rounded-full`}
        resizeMode="stretch"
      />
      <View style={tw`flex-1`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`font-medium text-base`}>{mail.by}</Text>
          <Text style={tw`text-xs`}>{mail.time}</Text>
        </View>
        <Text>
          {mail.subject.length > 45
            ? mail.subject.substring(0, 45) + "..."
            : mail.subject}
        </Text>
        <View style={tw`flex-row justify-between`}>
          <Text>
            {mail.content.length > 45
              ? mail.content.substring(0, 45) + "..."
              : mail.content}
          </Text>

          <Pressable onPress={() => setIsStarred((prev) => !prev)}>
            <Entypo
              name={isStarred ? "star" : "star-outlined"}
              color={isStarred ? "#d08700" : "black"}
              size={20}
            />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default MailPreview;
