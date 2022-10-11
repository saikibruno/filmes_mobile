import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, Button } from 'react-native';

import Index from '../../../index';
import api from '../../services/Api'

export default function ListaTopRated(props) {
    const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState()

    useEffect(() => {
        api.get('/movie/top_rated').then(result => {
            setDados(result.data.results)
        })
            .catch(() => (alert('erro')))
            .finally(() => setCarregando(false))
    }, [])

    return (
        <View style={styles.container}>
            {
                carregando ? <ActivityIndicator /> : (
                    <FlatList
                        style={styles.card}
                        data={dados}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) =>
                            <>
                                <Index data={item} />                                
                            </>
                        }
                    />
                )
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'yellow',
    },
    bar: {
        backgroundColor: 'white',
    },
    navigate: {
        backgroundColor: 'black',
    },
    botao: {
        backgroundColor: 'white',
        color: 'black',
    },
    card: {
        padding: 5,
        backgroundColor: 'red',
        width: 300,
        alignSelf: 'center'
    }
});