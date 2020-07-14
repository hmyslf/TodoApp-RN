import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    backgroundColor: '#E5F8EF',
    width: wp('100%'),
    paddingHorizontal: wp('3%'),
    paddingTop: hp('2%'),
  },
  cardBox: {
    backgroundColor: '#FFFFFF',
    height: hp('17%'),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: wp('2%'),
    paddingLeft: wp('5%')
  },
  cardTitle: {
    fontSize: wp('6%')
  },
  cardDescription: {
    fontSize: wp('3%')
  }
});