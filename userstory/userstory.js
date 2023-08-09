import {View, Image, Text} from 'react-native';
import {styles} from '../sty/styles';
import { UserProfileImage } from '../userprofile/UserProfileImage';
export const Userstory = item => {
  return (
    <View style={styles.storyContainer}>
      <UserProfileImage />
      <View>
        <Text style={{color: 'black'}}>{item.firstName}</Text>
      </View>
    </View>
  );
};
