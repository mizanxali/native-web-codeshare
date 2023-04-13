import React from "react";
import { Text, View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

export const App = () => {
  return (
    <StyledView className="w-full border-2 border-yellow-400 rounded-lg flex items-center justify-center">
      <StyledText className="text-blue-700 font-bold text-2xl uppercase">
        Hello World
      </StyledText>
      <StyledText className="text-blue-700 font-bold text-2xl uppercase">
        This is cool!
      </StyledText>
    </StyledView>
  );
};
