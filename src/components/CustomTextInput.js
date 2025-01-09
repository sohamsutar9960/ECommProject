import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {useTheme} from '@react-navigation/native';

const CustomTextInput = ({left, right, ...props}) => {
  const {colors} = useTheme();
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const handleChange = text => {
    setValue(text);
    // validate(text);
  };

  const validate = text => {
    const errors = [];

    validationRules.forEach(rule => {
      if (!rule.test(text)) {
        errors.push(rule.message);
      }
    });

    setError(errors.length > 0 ? errors.join(', ') : null);
  };

  return (
    <View
      style={[
        styles.inputContainer,
        {
          backgroundColor: colors.CARD,
        },
      ]}>
      {left && <View>{left}</View>}
      <TextInput
        {...props}
        style={[styles.input, {color: colors.TEXT}]}
        placeholderTextColor={colors.GREY}
      />
      {right && <View>{right}</View>}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  input: {
    padding: 'offset',
    flex: 1,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default CustomTextInput;
