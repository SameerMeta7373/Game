import {StyleSheet, Text, View} from 'react-native';
import {primaryButtonI} from '../Interface';
import {FC, PropsWithChildren, ReactNode} from 'react';
import fonts from '../../constants/font';
import { Platform } from 'react-native';

const Title: FC<primaryButtonI> = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    
    fontFamily: fonts.font2,
    borderRadius: 10,
    color: '#0d2a58',
    textAlign: 'center',
    borderWidth:  Platform.OS === 'android' ? 6 : 0,
    borderColor: '#0d2a58',
    paddingVertical : '1%',
    maxWidth : '80%',
    width : 400
  },
});

export default Title;
