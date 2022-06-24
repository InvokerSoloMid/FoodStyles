import {StyleSheet} from 'react-native';
import { Colors } from '../../styles/Colors';

const MenuItem = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: Colors.AQUA_GREEN,
    fontWeight: '700',
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
});
export default MenuItem;
