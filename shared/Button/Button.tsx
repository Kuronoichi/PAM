import { Pressable, PressableProps, Text, View, StyleSheet, ActivityIndicator, ViewStyle } from "react-native";
import { Colors } from "../colors";

type ButtonProps = PressableProps & {
  text: string;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  style?: ViewStyle;
};

export function Button({
  text,
  variant = 'primary',
  isLoading = false,
  disabled,
  style,
  ...props
}: ButtonProps) {
  return (
    <View style={style}>
      <Pressable
        {...props}
        disabled={disabled || isLoading}
        style={({ pressed }) => [
          styles.button,
          variant === 'primary' ? styles.primary : styles.secondary,
          disabled && styles.disabled,
          pressed && styles.pressed,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.text}>{text}</Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 48,
    paddingHorizontal: 24,
    minWidth: 120,
  },
  primary: {
    backgroundColor: 'black',
  },
  secondary: {
    backgroundColor: Colors.red,
  },
  disabled: {
    opacity: 0.6,
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  text: {
    fontFamily: 'Kodchasan-Bold',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
