import {StyleSheet} from 'react-native';

const FoodStyleItem = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  contentWrapper: {
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#00000033',
    shadowOffset: {height: 3, width: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    width: '90%',
    backgroundColor: 'white',
    height: 52,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 18,
    zIndex: 1,
    position: 'relative',
  },
  content: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  revert: {
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse'
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: '#434343',
  },
  circleBtnContainer: {
    borderRadius: 100,
    borderWidth: 2.5,
    width: 27,
    height: 27,
    borderColor: '#11B777',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 1.5,
  },
  noBorder: {
    borderWidth: 0,
  },
  image: {
    width: 25,
    height: 25,
  },
  bigImage: {
    width: 35,
    height: 35,
    marginRight: 5
  },
});
export default FoodStyleItem;
