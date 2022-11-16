import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detalhes from "../comum/Detalhes";
import ListaTopRatedScreed from "./ListaTopRatedScreed";


const TopRatedStack = createNativeStackNavigator();

function TopRatedStackScreen() {
  return (
    <TopRatedStack.Navigator>
      <TopRatedStack.Screen name="TopRatedStack" component={ListaTopRatedScreed} options={{ headerShown: false }} />
      <TopRatedStack.Screen
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
    </TopRatedStack.Navigator>
  );
}

export default TopRatedStackScreen;