import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListaPopular from "../pages/Popular/ListaPopular";
import ListaTopRated from "../pages/TopRated/ListaTopRated";

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