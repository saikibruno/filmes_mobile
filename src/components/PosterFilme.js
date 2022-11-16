import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text } from "react-native-paper";

function PosterFilme({ screenName, idNumber, poster,namePoster }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(screenName,idNumber )}>   
        {poster === null ?
                <Card style={styles.cardImgNull}><Text style={styles.textCard}>{namePoster}</Text></Card> :
                <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + poster }} style={styles.cardImg} />
            }            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardImg: {
        alignSelf: 'center',
        width:270,
        height:400,        
        borderRadius:20
    },
    cardImgNull: {
        alignSelf: 'center',
        width:270,
        height:400,        
        borderRadius:20,
        backgroundColor:"#000"
    },
    textCard: {
        alignSelf: 'center',
        fontSize: 50,
        paddingTop:100,
        color: '#A9CCE3',
    },
    
})

export default PosterFilme;