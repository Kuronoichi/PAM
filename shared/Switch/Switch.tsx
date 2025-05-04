import { Switch, View, Text, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import { Colors } from '../colors';

interface CustomSwitchProps {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  style?: ViewStyle;
}

export const CustomSwitch: React.FC<CustomSwitchProps> = ({
                                                            label,
                                                            value,
                                                            onValueChange,
                                                            style
                                                          }) => {
  return (
      <View style={[styles.container, style]}>
        <Text style={styles.label}>{label}</Text>
        <Switch
            value={value}
            onValueChange={onValueChange}
            trackColor={{ false: Colors.black, true: Colors.black }}
            thumbColor={value ? Colors.red : Colors.white}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    width: '100%',
    backgroundColor: Colors.black,
    borderRadius: 10,
    height: 48
  },
  label: {
    marginRight: 10,
    fontSize: 16,
    fontFamily: 'Kodchasan-Regular',
    color: Colors.white
  },
});
