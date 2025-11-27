import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ViewStyle } from "react-native";
import { styles } from "./styles";

interface GradientProps {
  style?: ViewStyle;
}

export const Gradient = ({ style }: GradientProps) => {
  return (
    <LinearGradient
      colors={["transparent", "#aa00a9"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 6, y: 1 }}
      style={[styles.gradient, style]}
    />
  );
};
