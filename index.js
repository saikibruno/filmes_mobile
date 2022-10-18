import { Link, useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Card, Paragraph, Title } from "react-native-paper";
import { AppRegistry } from "react-native";
import App from "./App";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});

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

function GoImg({ screenName, idNumber,poster, }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(screenName, idNumber)}>
            <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + poster }} style={{ alignSelf: 'center', width: 120 }} />
        </TouchableOpacity>
    )
}

export default class Index extends Component {
    render() {
        return (
            <Card style={{ alignSelf: 'center', width: 240 }} >
                <Card.Content>
                    <Title>{this.props.data.title}</Title>
                </Card.Content>
                    <GoImg screenName={'DetalhePopular'} idNumber={this.props.data.id} poster={this.props.data.poster_path}></GoImg>
                <Card.Content>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Actions style={{ alignSelf: 'center' }}>
                    <Gobutton screenName={'DetalhePopular'} idNumber={this.props.data.id} ></Gobutton>
                </Card.Actions>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 50,
    },
    nomeFilme: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    tinyLogo: {
        width: 150,
        height: 250
    },
    botao: {
        backgroundColor: 'white',
        color: 'black',
    },
})