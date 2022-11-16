import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import TabNavi from './src/components/TabNavi';
import Detalhes from './src/pages/comum/Detalhes';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavi" component={TabNavi} options={{ headerShown: false }}/>
        <Stack.Screen name="Detalhes" component={Detalhes} options={{title: 'Detalhes'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
