import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {primaryButtonI} from '../Interface';
import Title from '../components/Title';
import {useEffect, useState} from 'react';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../style/Card';
import InstructionText from '../style/InstructionText';
import Icon from 'react-native-vector-icons/Ionicons';
import GuessLogItem from '../components/GuessLogItems';

function GenerateRandom(max: number, min: number, exclude: number) {
  const randNum = Math.floor(Math.random() * (max - min)) + min;

  if (randNum === exclude) {
    return GenerateRandom(min, max, exclude);
  } else {
    return randNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}: any) {
  const initialGuess = GenerateRandom(1, 100, userNumber);
  const [currGuess, setCurrGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

  const {width, height} = useWindowDimensions();

  useEffect(() => {
    if (currGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuess(direction: any) {
    //direction => lower or higher

    if (
      (direction === 'lower' && currGuess < userNumber) ||
      (direction === 'greater' && currGuess > userNumber)
    ) {
      Alert.alert("Don't Lie !!!", 'You know that this is wrong !', [
        {
          text: 'Back To Game',
          style: 'cancel',
        },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currGuess;
    } else {
      minBoundary = currGuess + 1;
    }
    const newRandNum: number = GenerateRandom(
      minBoundary,
      maxBoundary,
      currGuess,
    );
    setCurrGuess(newRandNum);
    setGuessRounds(prevGuessRounds => [...prevGuessRounds, newRandNum]);
  }

  const GuessRoundsLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currGuess}</NumberContainer>
      <Card>
        <View style={styles.buttons}></View>
      </Card>
    </>
  );

  if (width > 400) {
    content = (
      <>
        <InstructionText>Higher or Lower</InstructionText>
        <View style = {styles.wideButtons}>
          <View style={styles.singleButton}>
            <PrimaryButton onPress={nextGuess.bind(null, 'lower')}>
              <Icon name="remove" size={24} color="white"></Icon>
            </PrimaryButton>
          </View>
          <NumberContainer>{currGuess}</NumberContainer>
          <View style={styles.singleButton}>
            <PrimaryButton onPress={nextGuess.bind(null, 'greater')}>
              <Icon name="add" size={24} color="white"></Icon>
            </PrimaryButton>
          </View>
          
        </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      <Title> Opponent's Guess</Title>
      {content}
      <FlatList
        data={guessRounds}
        renderItem={itemData => (
          <GuessLogItem
            roundNumber={GuessRoundsLength - itemData.index}
            guess={itemData.item}></GuessLogItem>
        )}
        inverted
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    width: '90%',
  },
  singleButton: {
    flex: 1,
  },
  wideButtons : {
    flexDirection : 'row',
    alignItems : 'center'
  }
});

export default GameScreen;
