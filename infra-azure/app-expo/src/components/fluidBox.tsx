import React from "react";
import { View, ViewStyle, StyleProp, Text } from "react-native";

interface FluidBoxProps {
  title?: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const FluidBox: React.FC<FluidBoxProps> = ({ title, children, style }) => {
  return (
    <View
      accessibilityLabel={title}
      style={[
        {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
          margin: 8,
        },
        style, // override default styles if needed
      ]}
    >
        <Text>{title}</Text>
      {children}
    </View>
  );
};

export default FluidBox;