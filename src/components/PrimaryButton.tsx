import {FC, PropsWithChildren, ReactNode} from 'react';
import {primaryButtonI} from '../Interface';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const primaryButton: FC<primaryButtonI> = ({onPress, children}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{color: '#041127'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default primaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 18,
    marginTop: 20,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#072659',
    paddingVertical: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 5,
    paddingVertical: 1,
    fontSize: 18,
  },
});
