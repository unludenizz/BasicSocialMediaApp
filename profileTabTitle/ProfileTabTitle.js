import {StyleSheet, Text} from 'react-native';

export const ProfileTabTitle = item => {
  return (
    <Text
      style={[
        styles.title,
        {color: item.isFocused ? '#022150' : '#79869F'},
        {fontWeight: item.isFocused ? '500' : '400'},
      ]}>
      {item.title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    lineHeight: 19,
    fontSize: 16,
  },
});
