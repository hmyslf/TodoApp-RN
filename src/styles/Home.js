import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F8EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBox: {
    backgroundColor: '#00B761',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('2%'),
    width: wp('25%'),
    height: hp('6%'),
    marginTop: hp('1%'),
  }
});
