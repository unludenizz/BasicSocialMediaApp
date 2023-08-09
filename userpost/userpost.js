import {View, Image, Text} from 'react-native';
import {styles} from '../sty/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faComment,
  faHeart,
  faFileLines,
} from '@fortawesome/free-regular-svg-icons';

export const Userpost = props => {
  return (
    <View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 20}}>
        <View style={styles.borderback}>
          <Image
            style={styles.storys}
            source={require('../default_profile.png')}
          />
        </View>
        <View style={{paddingHorizontal: 20, paddingBottom: 5}}>
          <Text style={{fontSize: 17, color: 'black', fontWeight: '700'}}>
            {props.firstName} {props.lastName}
          </Text>
          <Text style={{paddingTop: 6}}>{props.location}</Text>
        </View>
        <Text style={{fontSize: 35, paddingLeft: 45, paddingBottom: 30}}>
          ...
        </Text>
      </View>
      <Image source={require('../default_post.png')} />
      <View
        style={{
          flexDirection: 'row',
          paddingBottom: 35,
          marginTop: 15,
        }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            paddingRight: 40,
            paddingLeft: 20,
          }}>
          <FontAwesomeIcon icon={faHeart} />
          <Text>{props.likes}</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            paddingRight: 40,
          }}>
          <FontAwesomeIcon icon={faComment} />
          <Text>{props.comments}</Text>
        </View>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <FontAwesomeIcon icon={faBookmark} />
          <Text>{props.bookmarks}</Text>
        </View>
      </View>
      <View style={{paddingBottom: 20}}>
        <View style={{width: '100%', height: 0.4, backgroundColor: 'black'}} />
      </View>
    </View>
  );
};
