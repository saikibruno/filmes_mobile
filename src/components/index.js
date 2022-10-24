import { Link, useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Card, Paragraph, Title } from "react-native-paper";


function Gobutton({ screenName, idNumber }) {
    const navigation = useNavigation();
    return (
        <View style={{ alignSelf: 'center' }}>
            <Button
                onPress={() => navigation.navigate(screenName, idNumber)}
                title="Detalhes"
                color="#FF7F50"
            />
        </View>
    )
}

function GoImg({ screenName, idNumber, poster, }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(screenName, idNumber)}>
            <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + poster }} style={styles.cardImg} />
        </TouchableOpacity>
    )
}

export default class Index extends Component {
    render() {
        return (
            <Card style={styles.card} >
                <Card.Content>
                    <Title>{this.props.data.title}</Title>
                </Card.Content>
                <GoImg screenName={'DetalhePopular'} idNumber={this.props.data.id} poster={this.props.data.poster_path}></GoImg>                
                <Card.Actions style={styles.cardAction}>
                    <Gobutton screenName={'DetalhePopular'} idNumber={this.props.data.id} ></Gobutton>
                </Card.Actions>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        alignSelf:'center',
        width:240
    },
    cardAction:{
        alignSelf:'center'
    },
    cardImg:{
        alignSelf: 'center', 
        width: 120
    }
})