import { View, Image } from 'react-native';
import { styles } from '../sty/styles';

export const UserProfileImage = () => {
  return (
    <View style={styles.borderback}>
      <Image style={styles.storys} source={require('../default_profile.png')} />
    </View>
  );
};
