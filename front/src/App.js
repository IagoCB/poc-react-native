import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import { Button, Icon } from "@rneui/base";

import ContextProvider from "./contexts/context";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <ContextProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{
                            title: "Formulário de Usuário"
                        }}
                    />
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: "Lista de Usuários",
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate("UserForm")}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="white" />}
                                    />
                                )
                            }
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ContextProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: "#27b1bf"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold",
    }
}