import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import TextInputField from '../components/TextInputField';
import BusinessCard from '../models/BusinessCard';
import {saveBusinessCard} from '../actions/Action';
import AppDispatch from '../reducers/AppDispatch';
import {useDispatch} from 'react-redux';
import AppStrings from '../constants/AppStrings';
import {
  validateEmail,
  validateInputText,
  validatePhone,
  validateUrl,
} from '../utils/Validation';

interface Props {
  navigation: any;
}

type AddCardScreenProps = {
  navigation: NavigationProp<any>;
};

const AddCardScreen: React.FC<Props> = ({navigation}: AddCardScreenProps) => {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [image, setImage] = useState(AppStrings.sample_profile_image);
  const [nameError, setNameError] = useState('');
  const [occupationError, setOccupationError] = useState('');
  const [companyError, setCompanyError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [urlError, setUrlError] = useState('');

  const imageSelection = () => {
    setImage(AppStrings.sample_profile_image);
  };

  const validateInputError = () => {
    setNameError(validateInputText(name));
    setOccupationError(validateInputText(occupation));
    setCompanyError(validateInputText(company));
    setEmailError(validateEmail(email));
    setPhoneError(validatePhone(phone));
    setUrlError(validateUrl(linkedInUrl));
  };

  const dispatch: AppDispatch = useDispatch();

  const handleSave = () => {
    validateInputError();
    if (
      name.length > 0 &&
      occupation.length > 0 &&
      company.length > 0 &&
      email.length > 0 &&
      phone.length > 0
    ) {
      if (
        nameError.length === 0 &&
        occupationError.length === 0 &&
        companyError.length === 0 &&
        emailError.length === 0 &&
        phoneError.length === 0 &&
        urlError.length === 0
      ) {
        const newCard = new BusinessCard(
          1,
          name,
          occupation,
          company,
          phone,
          email,
          linkedInUrl,
          image,
        );
        dispatch(saveBusinessCard(newCard));
        navigation.navigate('BusinessCardList');
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={imageSelection}>
          <Image style={styles.image} source={{uri: image}} />
        </TouchableOpacity>
      </View>
      <TextInputField
        type={'Name'}
        onChangeText={setName}
        inputText={name}
        error={nameError}
      />
      <TextInputField
        type={'Occupation'}
        onChangeText={setOccupation}
        inputText={occupation}
        error={occupationError}
      />
      <TextInputField
        type={'Company'}
        onChangeText={setCompany}
        inputText={company}
        error={companyError}
      />
      <TextInputField
        type={'Email'}
        onChangeText={setEmail}
        inputText={email}
        error={emailError}
      />
      <TextInputField
        type={'Phone'}
        onChangeText={setPhone}
        inputText={phone}
        error={phoneError}
      />
      <TextInputField
        type={'LinkedIn URL'}
        onChangeText={setLinkedInUrl}
        inputText={linkedInUrl}
        error={urlError}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Card</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  saveButton: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddCardScreen;
