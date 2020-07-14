import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP
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
    height: hp('19%'),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: wp('2%'),
    paddingLeft: wp('5%')
  },
  cardTitle: {
    fontSize: wp('6%'),
    marginTop: wp('2%')
  },
  cardDescription: {
    fontSize: wp('3%')
  },
  buttonBox: {
    backgroundColor: '#00B761',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('2%'),
    width: wp('25%'),
    height: hp('6%'),
    marginTop: hp('1%'),
    marginBottom: hp('2%')
  },
  pendingBox: {
    backgroundColor: 'white',
    borderColor: '#e83f4e',
    borderWidth: 1,
    borderRadius: wp('7%'),
    width: wp('22%'),
    padding: 10,
    textAlign: 'center',
    elevation: 2,
  },
  doneBox: {
    padding: 10,
    elevation: 2,
    borderRadius: wp('7%'),
    textAlign: 'center',
    backgroundColor: '#00b761',
    width: wp('22%')
  },
});