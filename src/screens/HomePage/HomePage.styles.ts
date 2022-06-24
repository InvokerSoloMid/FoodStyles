import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('screen').height;

const HomePage = StyleSheet.create({
  wrapper: {
    color: '#F8F8F8',
    backgroundColor: 'transparent',
    height: height - 100,
    width: '100%',
    marginTop: -50,
    zIndex: 10,
  },
  container: {
    flex: 1,
  },
  bottomShadow: {
    width: '100%',
    height: 70,
    backgroundColor: '#b0b0b0',
    opacity: 0.4,
    position: 'absolute',
    bottom: 0,
  },
  modalWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    paddingTop: height * 0.3,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)'
  }
});
export default HomePage;
