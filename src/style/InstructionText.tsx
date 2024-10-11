import {StyleSheet, Text} from 'react-native';

function InstructionText({children, style}: any) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: 'white',
    fontSize: 26,
    // backgroundColor : 'orange'
    // marginTop  :
  },
});
