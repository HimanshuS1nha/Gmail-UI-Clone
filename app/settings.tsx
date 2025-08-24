import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const Settings = () => {
  return (
    <View style={tw`flex-1 bg-white pt-4.5 px-9`}>
      <View style={tw`gap-y-5`}>
        <Text style={tw`text-base`}>General Settings</Text>
        <Text style={tw`text-base`}>random@email.com</Text>
        <Text style={tw`text-base`}>random2@email.com</Text>
        <Text style={tw`text-base`}>Add account</Text>
      </View>
    </View>
  );
};

export default Settings;
