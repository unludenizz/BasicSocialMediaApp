import {View, Text, ScrollView, FlatList, Image, Pressable} from 'react-native';
import {styles} from '../../sty/styles';
import {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {Userstory} from '../../userstory/userstory';
import {Userpost} from '../../userpost/userpost';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
const Home = ({navigation}) => {
  const datas = [
    {
      firstName: 'Deniz',
      id: 1,
    },
    {
      firstName: 'Abi',
      id: 2,
    },
    {
      firstName: 'James',
      id: 3,
    },
    {
      firstName: 'Yasar',
      id: 4,
    },
    {
      firstName: 'Ayse',
      id: 5,
    },
    {
      firstName: 'Mike',
      id: 6,
    },
    {
      firstName: 'Jordan',
      id: 7,
    },
    {
      firstName: 'Michael',
      id: 8,
    },
    {
      firstName: 'Baba',
      id: 9,
    },
    {
      firstName: 'Lisa',
      id: 10,
    },
  ];
  const posts = [
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'istanbul',
      likes: 700,
      comments: 10,
      bookmarks: 25,
      id: 1,
    },
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'izmir',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Boston',
      likes: 111,
      comments: 30,
      bookmarks: 5,
      id: 3,
    },
    {
      firstName: 'Denay',
      lastName: 'Gulun',
      location: 'Los Santos',
      likes: 1500,
      comments: 14,
      bookmarks: 5,
      id: 4,
    },
  ];

  const pagesizes = 4;
  const pagesizeposts = 2;
  const [postpageNumber, setpostPageNumber] = useState(1);
  const [isLoadingposts, setIsLoadingposts] = useState(false);
  const [renderedDataposts, setRenderedDataposts] = useState(
    posts.slice(0, pagesizes),
  );

  const paginations = (datas, pageNumber, pagesize, posts = false) => {
    let startIndex = (pageNumber - 1) * pagesize;
    if (startIndex > datas.length) {
      return [];
    }
    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setpostPageNumber(pageNumber);
    }
    setPageNumber(pageNumber);
    return datas.slice(startIndex, startIndex + pagesize);
  };

  const pagesize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedData, setRenderedData] = useState(datas.slice(0, pagesize));

  const pagination = (datas, pageNumber, pagesize) => {
    let startIndex = (pageNumber - 1) * pagesize;
    if (startIndex > datas.length) {
      return [];
    }
    setPageNumber(pageNumber);
    return datas.slice(startIndex, startIndex + pagesize);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Lets Explore</Text>
          <Pressable
            style={styles.messagebackground}
            onPress={() => navigation.navigate(Routes.Profile)}>
            <FontAwesomeIcon icon={faEnvelope} size={23} />
            <View style={styles.messagenumber}>
              <Text style={styles.number}>1</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.storycontainer}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (!isLoading) {
                setIsLoading(true);
                setRenderedData(prev => [
                  ...prev,
                  ...pagination(datas, pageNumber + 1, pagesize),
                ]);
                setIsLoading(false);
              }
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={renderedData}
            renderItem={({item}) => (
              <Userstory style={styles.storys} firstName={item.firstName} />
            )}
          />
        </View>
        <View style={styles.userpostcontainer}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (!isLoadingposts) {
                setIsLoadingposts(true);
                setRenderedDataposts(prev => [
                  ...prev,
                  ...paginations(posts, pageNumber + 1, pagesize, true),
                ]);
                setIsLoadingposts(false);
              }
            }}
            showsVerticalScrollIndicator={false}
            data={renderedDataposts}
            renderItem={({item}) => (
              <Userpost
                firstName={item.firstName}
                lastName={item.lastName}
                comments={item.comments}
                likes={item.likes}
                bookmarks={item.bookmarks}
                location={item.location}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
