import React, { useState, useContext } from "react";
import { Button, Text } from "@rneui/base";
import { StyleSheet, TextInput, View } from "react-native";

import Client from '../services/user.js';

import { Context } from '../contexts/context';

export default ({ route, navigation }) => {

    const {
        setListUpdate,
    } = useContext(Context);  

    const [user, setUser] = useState(route.params ? route.params : {})

    async function updateUser() {
        const userData = await Client.updateUser(user);
        if (userData.status === 200) {
            setListUpdate(true)
        }
    }

    async function createUser() {
        const userData = await Client.createUser(user);
        if (userData.status === 200) {
            setListUpdate(true)
        }
    }

    return (
        <View style={style.form}>
            <Text style={style.text}>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={userName => setUser({ ...user, userName })}
                placeholder="Insira o nome"
                value={user.userName}
            />

            <Text style={style.text}>E-mail</Text>
            <TextInput
                style={style.input}
                onChangeText={userEmail => setUser({ ...user, userEmail })}
                placeholder="Insira o e-mail"
                value={user.userEmail}
            />

            <Text style={style.text}>Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={userAvatar => setUser({ ...user, userAvatar })}
                placeholder="Insira a url do avatar"
                value={user.userAvatar}
            />

            <Button 
                title="Salvar"
                color={"#27b1bf"}
                onPress={() => {
                    {user.userId ? updateUser() : createUser()}
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: "#27b1bf",
        borderWidth: 1.5,
        marginBottom: 10,
        padding: 5,
        borderRadius: 10
    },
    text:{
        fontSize: 15,
        color: "#1e8c93",
        fontWeight: "bold",
    },
})