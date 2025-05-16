import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
     screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: '#5e5e5e',
        },
        headerShadowVisible: false,
        tabBarActiveTintColor: "yellow",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
            backgroundColor: "#5e5e5e",
        },
     }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          //headerTitle: "Curriculum Vitae",
          title: "Home",
          tabBarIcon: ({focused, color}) => (
          <Ionicons 
            name={focused ? "home-sharp" : "home-outline"} 
            color={color}
            size={24}
            />
          )
          //headerLeft: () => <></>
        }}
      />
      <Tabs.Screen 
        name="profissional" 
        options={{
          //headerTitle: "Sobre",
          title: "Profissional",
          tabBarIcon: ({focused, color}) => (
            <Ionicons 
              name={focused ? "hammer" : "hammer-outline"} 
              color={color}
              size={24}
              />
            )
        }}
      />
    </Tabs>
  );
}