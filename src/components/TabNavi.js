import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from 'react-native-vector-icons/Feather';

import ListaPopular from "../pages/popular/ListaPopular";

import ListaTopRated from "../pages/topRated/ListaTopRated";

const Tab = createBottomTabNavigator();

function TabNavi() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;

                switch (route.name) {
                    case 'Lista Popular':
                        iconName = 'align-center';
                        break;
                    case 'Lista Top Rated':
                        iconName = 'thumbs-up';
                        break;
                    default:
                        iconName = 'circle';
                        break;
                }

                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#9C27B0',
            tabBarInactiveTintColor: '#777',
            tabBarStyle: [
                {
                  "display": "flex"
                },
                null
              ]
        })}            
        >
            <Tab.Screen name="Lista Popular" component={ListaPopular} />
            <Tab.Screen name="Lista Top Rated" component={ListaTopRated} />                        
        </Tab.Navigator>
    );
}

export default TabNavi;