import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import TabNavi from "./src/components/TabNavi"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetalhePopular from "./src/pages/popular/DetalhePopular";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavi" component={TabNavi} options={{ headerShown: false }}/>
        <Stack.Screen name="DetalhePopular" component={DetalhePopular} options={{title: 'Detalhes'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;