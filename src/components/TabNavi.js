import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from 'react-native-vector-icons/Feather';
import PopularStackScreen from "../pages/popular/PopularStackScreed";
import TopRatedStackScreed from "../pages/topRated/TopRatedStackScreed";

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
            tabBarInactiveTintColor: 'black',

            tabBarStyle: [
                {
                    "display": "flex",
                    "backgroundColor": "#A9A9A9",
                },
                null
            ]
        })}
        >
            <Tab.Screen 
            name="Lista Popular" 
            component={PopularStackScreen} 
            options={{                
                headerStyle: {
                    backgroundColor: '#A9A9A9',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
            <Tab.Screen 
            name="Lista Top Rated" 
            component={TopRatedStackScreed}
            options={{                
                headerStyle: {
                    backgroundColor: '#A9A9A9',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
        </Tab.Navigator>
    );
}

export default TabNavi;