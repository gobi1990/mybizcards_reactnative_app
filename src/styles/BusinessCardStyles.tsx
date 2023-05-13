import {ImageStyle, StyleSheet} from 'react-native';

const BusinessCardStyles: StyleSheet.NamedStyles<any> = {
  profileAvatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  } as ImageStyle,
};

export default BusinessCardStyles;
