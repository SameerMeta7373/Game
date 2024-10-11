import { Dimensions, StyleSheet, Text, View } from "react-native";


function Card({children} : any){
    return <View style = {styles.card}>{children}</View>
}
export default Card;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: '10%',
        marginTop: deviceWidth < 300  ? 10 : 20,
        marginBottom : 30,
        padding: 10,
        backgroundColor: '#0851c3',
        elevation: 14,
      },
    
});