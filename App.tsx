import React, {useState} from 'react';
import StartScreen from './src/Screen/startScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './src/Screen/gameScreen';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import GameOver from './src/Screen/overScreen';
import OverScreen from './src/Screen/overScreen';

function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameisOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumber(pickedNumber: any) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function GameOverHandler(numberOfRounds: any) {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartScreen onPickNumber={pickedNumber} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={GameOverHandler} />
    );
  }
  if (gameisOver && userNumber) {
    screen = (
      <OverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar barStyle = "light-content" />
      <LinearGradient colors={['red', '#0146b3']} style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/dice.jpg')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
