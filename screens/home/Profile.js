import {View, Text, ScrollView, Image} from 'react-native';
import {ProfileTabNavigation} from '../../navigation/MainNavigation';

const Profile = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View
          style={{
            marginTop: 32,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View
            style={{
              borderWidth: 1,
              padding: 4,
              borderColor: '#0150EC',
              borderRadius: 120,
            }}>
            <Image
              style={{width: 120, height: 120}}
              source={require('../../default_profile.png')}
            />
          </View>
        </View>
        <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Inter',
              fontSize: 20,
              lineHeight: 24,
              color: '#022150',
            }}>
            Emmanuel Robertsen
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 24,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 25,
          }}>
          <View
            style={{
              paddingHorizontal: 18,
              alignItems: 'center',
              borderRightWidth: 1,
              borderColor: '#022150',
            }}>
            <Text
              style={{
                fontFamily: 'Inter',
                fontWeight: '600',
                fontSize: 20,
                lineHeight: 24,
                color: '#022150',
              }}>
              45
            </Text>
            <Text
              style={{
                fontFamily: 'Inter',
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 19,
                color: '#79869F',
              }}>
              Following
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 18,
              alignItems: 'center',
              borderRightWidth: 1,
            }}>
            <Text
              style={{
                fontFamily: 'Inter',
                fontWeight: '600',
                fontSize: 20,
                lineHeight: 24,
                color: '#022150',
              }}>
              30M
            </Text>
            <Text
              style={{
                fontFamily: 'Inter',
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 19,
                color: '#79869F',
              }}>
              Followers
            </Text>
          </View>
          <View style={{paddingHorizontal: 18, alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'Inter',
                fontWeight: '600',
                fontSize: 20,
                lineHeight: 24,
                color: '#022150',
              }}>
              100
            </Text>
            <Text
              style={{
                fontFamily: 'Inter',
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 19,
                color: '#79869F',
              }}>
              Posts
            </Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#EFF2F6',
            marginVertical: 16,
            marginHorizontal: 28,
          }}
        />
        <View style={{height: 1000, zIndex: 999}}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
