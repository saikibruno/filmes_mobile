import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detalhes from "../comum/Detalhes";
import ListaPopularScreed from "./ListaPopularScreed";


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
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#6D6D6D'
                    }
                }}
            />
        </PopularStack.Navigator>
    );
}

export default PopularStackScreen;