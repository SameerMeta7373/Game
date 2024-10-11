import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Title from '../components/Title';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PrimaryButton from '../components/PrimaryButton';

function OverScreen({roundsNumber, userNumber, onStartNewGame}: any) {
  const {width, height} = useWindowDimensions();

  let imageSize = 380;

  if (width < 100) {
    imageSize = 200;
  }
  if (height < 400) {
    imageSize = 135;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
  };

  return (
    <ScrollView style = {{flex : 1}}>
      <View>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require('../../assets/images/GameOver3.png')}></Image>
        </View>
        <Text style={styles.TextStyle}>
          Your Phone needed{' '}
          <Text style={styles.highlight}>{roundsNumber} </Text>
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <View style={{marginHorizontal: 100, marginVertical: 40}}>
          <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    marginTop: 50,
    marginLeft: 10,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  TextStyle: {
    fontFamily: 'Serif',
    fontWeight: 'semibold',
    fontSize: 25,
    marginTop: 10,
    marginHorizontal: 10,
    color: 'white',
    textAlign: 'center',
    marginVertical: 18,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: 'black',
    fontWeight: 'bold',
  },
});

export default OverScreen;
