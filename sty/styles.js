import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  container: {
    flex: 1,
  },
  header: {
    paddingLeft: 15,
    paddingTop: 20,
    paddingRight: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messagebackground: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: 'rgba(233, 226, 230, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messagenumber: {
    flex: 1,
    position: 'absolute',
    bottom: 22,
    left: 25,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 15,
    height: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  number: {
    color: 'white',
    fontSize: 10,
    lineHeight: 10,
    fontWeight: '700',
  },
  storycontainer: {
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  storyContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
    alignItems: 'center',
  },
  storys: {
    width: 70,
    height: 70,
    borderWidth: 3,
    borderRadius: 40,
    borderColor: 'white',
  },
  borderback: {
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'pink',
  },
  userpostcontainer: {
    marginTop: 30,
    height: '100%',
    paddingHorizontal: 24,
  },
});
