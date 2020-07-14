import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0088cc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: wp('70%'),
    height: hp('6%'),
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    paddingLeft: wp('2%'),
    fontSize: 16,
    color: '#828282',
    backgroundColor: 'white',
    margin: 8,
  },
  title: {
    textAlign: 'left',
    fontSize: wp('10%'),
    fontWeight: 'bold',
    color: 'black'
  },
  textSmall: {
    marginBottom: hp('3%'),
    marginTop: hp('5%'),
    textAlign: 'left',
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: 'black',
  },
  buttonBox: {
    backgroundColor: '#00B761',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('2%'),
    width: wp('25%'),
    height: hp('6%'),
    marginTop: hp('1%'),
    marginBottom: hp('2%'),
  }
});