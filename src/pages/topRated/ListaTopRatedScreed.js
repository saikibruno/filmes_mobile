import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, Button } from 'react-native';
import Index from '../../components/index';
import api from '../../service/Api'

function ListaTopRatedScreed(props) {
    const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState()

    useEffect(() => {
        api.get('/movie/top_rated?language=pt-BR').then(result => {
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
                        data={dados}                        
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) =>
                            <View style={{paddingBottom:20}}>
                                <Index data={item}/>
                            </View>
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
        backgroundColor: '#4F4F4F',
        padding:10 
    }
});

export default ListaTopRatedScreed;