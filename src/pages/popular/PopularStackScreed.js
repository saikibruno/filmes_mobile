import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detalhes from "../comum/Detalhes";
import ListaPopularScreed from "./ListaPopularScreed";
import DetalhesAtor from "../comum/DetalhesAtor"


const PopularStack = createNativeStackNavigator();

function PopularStackScreen() {
    return (
        <PopularStack.Navigator>
            <PopularStack.Screen name="PopularStack" component={ListaPopularScreed} options={{ headerShown: false }} />
            <PopularStack.Screen
                name="Detalhes"
                component={Detalhes}
                options={{
                    title: 'Detalhes',
                    headerTintColor: '#A9CCE3',
                    headerStyle: {
                        backgroundColor: '#6D6D6D'
                    }
                }}
            />
            <PopularStack.Screen
                name="DetalhesAtor"
                component={DetalhesAtor}
                options={{
                    title: 'Detalhes Ator',
                    headerTintColor: '#A9CCE3',
                    headerStyle: {
                        backgroundColor: '#6D6D6D'
                    }
                }}
            />
        </PopularStack.Navigator>
    );
}

export default PopularStackScreen;