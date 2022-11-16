import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Card } from "react-native-paper";
import PosterFilme from "./PosterFilme";

export default class Index extends Component {
    render() {
        return (
            <Card style={styles.card} >
                <PosterFilme screenName={'Detalhes'} idNumber={this.props.data.id} poster={this.props.data.poster_path} />
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        width: 270,
        height: 400,
        borderRadius: 20,    
    },    
})