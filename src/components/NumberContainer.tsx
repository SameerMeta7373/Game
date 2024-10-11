import { Children } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

function NumberContainer ({children} : any ){
    return(
        <View style = {styles.container}> 
            <Text style = {styles.numberText}> {children} </Text>
        </View>
    )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width 

const styles = StyleSheet.create({
    container : {
        borderWidth : 5,
        borderColor : 'yellow',
        margin : deviceWidth < 380 ? 12 : 24,
        padding : deviceWidth < 380 ? 12 : 24,
        borderRadius: 16,
        alignItems : 'center',
        justifyContent: 'center',
    },
    numberText:{
        color :'yellow',
        fontSize : deviceWidth < 450 ? 28 : 36,
        fontWeight : 'bold'

    }
}) 