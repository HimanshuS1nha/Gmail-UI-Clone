import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useMemo } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import { useLocalSearchParams } from "expo-router";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

import Header from "@/components/header";
import MailPreview from "@/components/mail-preview";

import { mails } from "@/constants/mails";

const Mails = () => {
  const { type } = useLocalSearchParams() as { type: string };

  const pageWithFilters = useMemo(
    () => [
      "sent",
      "starred",
      "snoozed",
      "important",
      "scheduled",
      "drafts",
      "outbox",
      "All mail",
    ],
    []
  );

  const showFilters = pageWithFilters.includes(type);

  const filters = useMemo(
    () => [
      {
        title: type ? type.split("-").join(" ") : "",
        showArrow: true,
        giveBgColor: true,
      },
      {
        title: "to",
        showArrow: true,
      },
      {
        title: "attachment",
        showArrow: true,
      },
      {
        title: "date",
        showArrow: true,
      },
      {
        title: "is unread",
        showArrow: false,
      },
      {
        title: "exclude calendar updates",
        showArrow: false,
      },
    ],
    []
  );
  return (
    <SafeAreaView style={tw`mt-1 bg-[#fff8f6] flex-1`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <View style={tw`flex-1 mt-4 gap-y-4.5 px-3`}>
          {showFilters && (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {filters.map((filter) => {
                return (
                  <View
                    key={filter.title}
                    style={tw`border border-gray-300 mr-4 flex-row gap-x-1 items-center p-1.5 rounded-lg ${
                      filter.giveBgColor ? "bg-[#fae4d9]" : ""
                    }`}
                  >
                    <Text style={tw`capitalize text-xs`}>{filter.title}</Text>
                    {filter.showArrow && (
                      <AntDesign name="caretdown" size={8} color="black" />
                    )}
                  </View>
                );
              })}
            </ScrollView>
          )}
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`font-medium capitalize`}>
              {type ? type.split("-").join(" ") : "Primary"}
            </Text>

            {showFilters && (
              <View style={tw`flex-row gap-x-2 items-center`}>
                <Ionicons name="filter" size={20} color="black" />
                <Text style={tw`text-xs`}>Hide filters</Text>
              </View>
            )}
          </View>
          <FlashList
            data={mails}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <MailPreview mail={item} />;
            }}
            estimatedItemSize={50}
          />
        </View>
      </ScrollView>

      <Pressable
        style={tw`absolute bottom-3.5 right-3.5 bg-[#ffdac7] flex-row gap-x-3.5 items-center p-3.5 shadow-lg rounded-lg`}
      >
        <Feather name="edit-2" size={20} color="black" />
        <Text style={tw`font-medium`}>Compose</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Mails;
