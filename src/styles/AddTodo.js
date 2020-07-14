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
  inputBox: {
    backgroundColor: 'white',
    padding: hp('1%'),
    margin: hp('1%'),
    width: wp('70%'),
    borderRadius: 15,
  },
  form: {
    alignItems: 'center',
    padding: hp('2%'),
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#00B761',
  },
  buttonSubmit: {
    borderRadius: 15,
    width: wp('30%'),
    height: hp('5%'),
    padding: hp('1%'),
    margin: hp('1%'),
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#00B761',
  },
  inputDate: {
    padding: hp('1%'),
    margin: hp('1%'),
    width: wp('70%'),
    borderRadius: 15,
    backgroundColor: 'white',
  },
  buttonCancle: {
    backgroundColor: '#00B761',
    borderRadius: 15,
    width: wp('30%'),
    height: hp('5%'),
    padding: hp('1%'),
    margin: hp('1%'),
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row'
  }
});