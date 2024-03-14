import { StyleSheet, View } from "react-native";
import React, { useCallback, useEffect, useState } from 'react';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Body } from "./Body";

const colors = ['white', 'gray', 'yellow', 'red', 'blue', 'orange'];


export type UserType = {
    name: string;
    avatar: string;
};

export default function Main() {
    const [user, setUser] = useState<UserType>({
        name: 'Chua co ten',
        avatar: 'https://i.pinimg.com/564x/e0/67/d6/e067d60d6ead12a8fdaade48108d5a75.jpg'
    });

    const [lastTimeUpdate, setLastTimeUpdate] = useState('Ban chua cap nhat thong tin', );

    const [footerColor, setFooterColor] = useState(colors[0]);

    // Cap nhat thong tin cho tai khoan
    const handleUpdateInfor = useCallback((_user: UserType) => {
        setUser(_user);
    }, []);

    // Random color
    const handleRandomColor = useCallback(() => {
        const numberRan = Math.floor(Math.random() * colors.length);
        setFooterColor(colors[numberRan]);
    }, []);

    useEffect(() => {
        const currentdate = new Date();
        const datetime =
            currentdate.getDate() +
            '/' +
            (currentdate.getMonth() + 1) +
            '/' +
            currentdate.getFullYear() +
            ' ' +
            currentdate.getHours() +
            ':' +
            currentdate.getMinutes() +
            ':' +
            currentdate.getSeconds();
        setLastTimeUpdate(datetime)
    }, [user]);

    return (
        <View>
            <Header user={user} />
            <Body
                onUpdateInfor={handleUpdateInfor}
                onClickChangeBgFooter={handleRandomColor}
            />
            <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
        </View>
    )
}
