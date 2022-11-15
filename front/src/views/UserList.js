import { getActionFromState } from "@react-navigation/native";
import { ListItem, Avatar, Button, Icon } from "@rneui/base";
import React, { useState, useEffect } from "react";
import { View, FlatList, Alert } from "react-native";

import Client from '../services/user.js';

let mainList = [{
    userId: "e4f5f604-bd76-469d-b1f0-315a371b6ba9",
    userName: "Iago",
    userEmail: "iago@gmail.com",
    userAvatar: "https://cdn.pixabay.com/photo/2016/03/31/20/31/amazed-1295833__340.png",
},
{
    userId: "a3be8d4c-6e9f-4cbc-99ed-3e751820327f",
    userName: "Rafaela",
    userEmail: "rafa@rafa.com",
    userAvatar: "https://cdn.pixabay.com/photo/2016/04/01/12/11/avatar-1300582__340.png",
}
];

export default function UserList(props) {

    // const [listUser, setListUser] = useState([]);
    // const [listUpdate, setListUpdate] = useState(true);

    // async function fetchData() {
    //     const userData = await Client.listUser();
    //     if (userData.status === 200) {
    //         setListUser(userData.data);
    //         mainList = userData.data;
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [listUpdate]);

    function userDelete(user){
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?',[
            {
                text: 'Sim',
                onPress(){
                    console.warn('delete: ' + user.userId)
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
                data={mainList}
                renderItem={getUser}
            />
        </View>
    )
}