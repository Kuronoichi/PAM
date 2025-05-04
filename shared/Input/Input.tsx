import { TextInput, TextInputProps, StyleSheet, View, Text } from "react-native";
import { Colors } from "../colors";

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
};

export function Input({ label, error, style, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError, style]}
        placeholderTextColor={Colors.black}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: 'Kodchasan-Bold',
    alignSelf: 'center',
  },
  input: {
    fontFamily: 'Kodchasan-Regular',
    height: 48,
    borderRadius: 10,
    backgroundColor: Colors.lightgray,
    color: Colors.black,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputError: {
    borderColor: Colors.red,
  },
  errorText: {
    color: Colors.red,
    fontSize: 12,
    fontFamily: 'Kodchasan-Regular',
    marginTop: 4,
  },
});
