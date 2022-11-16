import { ListItem, Avatar, Button, Icon } from "@rneui/base";
import React, { useEffect, useContext } from "react";
import { View, FlatList, Alert } from "react-native";

import Client from '../services/user.js';

import { Context } from '../contexts/context';

export default (props) => {

    const {
        list,
        setList,
        listUpdate, 
        setListUpdate,
    } = useContext(Context);    

    async function fetchData() {
        const userData = await Client.listUser();
        if (userData.status === 200) {
            setList(userData.data);
        }
        setListUpdate(false)
    }

    useEffect(() => {
        fetchData();
    }, [listUpdate]);

    function userDelete(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                async onPress() {
                    await Client.deleteUser(user);
                    setListUpdate(true)
                }
            },
            {
                text: 'Não',
            }
        ])
    }


    function getUser({ item: user }) {
        return (
            <ListItem
                key={user.userId}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}
            >
                <Avatar size={50} source={{ uri: user.userAvatar }} />
                <ListItem.Content>
                    <ListItem.Title>{user.userName}</ListItem.Title>
                    <ListItem.Subtitle>{user.userEmail}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="#0ce3e8" />}
                />
                <Button
                    onPress={() => userDelete(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="#176585" />}
                />
            </ListItem>
        )
    };

    return (
        <View>
            <FlatList
                keyExtractor={user => user.userId.toString()}
                data={list}
                renderItem={getUser}
            />
        </View>
    )
}