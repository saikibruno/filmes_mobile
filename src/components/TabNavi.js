import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListaPopular from "../pages/popular/ListaPopular";
import ListaTopRated from "../pages/topRated/ListaTopRated";

const Tab = createBottomTabNavigator();

function TabNavi() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ListaPopular" component={ListaPopular} />
            <Tab.Screen name="ListaTopRated" component={ListaTopRated} />
        </Tab.Navigator>
    );
}

export default TabNavi;