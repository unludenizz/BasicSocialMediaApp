import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

export const ProfileTabPost = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.ProfileTabPostContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../default_post.png')}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../default_post.png')}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../default_post.png')}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export const ProfileTabVideo = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.ProfileTabPostContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../default_post.png')}
        />
      </View>
    </ScrollView>
  );
};


export const ProfileTabSaved = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.ProfileTabPostContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../default_post.png')}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../default_post.png')}
          />
        </View>
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
  ProfileTabPostContainer: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  imageContainer: {
    flexDirection: 'row',
    paddingHorizontal: 21,
  },
  image: {
    width: 300,
  },
  imageUpcomingRowsContainer: {
    marginTop: 11,
  },
});
