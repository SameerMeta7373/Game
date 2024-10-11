import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Card from '../style/Card';
import InstructionText from '../style/InstructionText';
import fonts from '../../constants/font';

function StartScreen({onPickNumber}: any) {
  const [enteredNumber, setenteredNumber] = useState('');

  const {width, height} = useWindowDimensions();

  function numberinputHandler(enteredText: any) {
    setenteredNumber(enteredText);
  }

  function ResetInput() {
    setenteredNumber('');
  }
  function confirmInputHandler() {
    //convert the string coming from enteredText to number
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert('Invalid Number!', 'Number Should be in between 1 and 99.', [
        {text: 'Okay', style: 'destructive', onPress: ResetInput},
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }

  const marginTopDistance = height < 350 ? 25 : 35;

  return (
    <View style={[styles.rootcontainer, {marginTop: marginTopDistance}]}>
      <Title>Guess The Number</Title>
      <Card>
        <InstructionText>Enter Any Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberinputHandler}></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={ResetInput}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}



const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    alignItems: 'center',
    fontFamily: fonts.font3,
  },
  numberInput: {
    height: 60,
    width: 60,
    fontSize: 34,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    color: 'white',
    marginVertical: 6,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  style: {
    fontFamily: fonts.font3,
  },
});

export default StartScreen;
