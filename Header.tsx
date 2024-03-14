import { Image, StyleSheet, Text, View, ViewStyle } from "react-native";
import Main, { UserType } from "./Main";
import { FC, memo } from "react";


type HeaderType = {
    user: UserType;
};

export const Header: FC<HeaderType> = memo(props => {

    const { user } = props;
    console.log('re-render header');

    return (
        <View
            style={containerStyle({
                height: 100,
                backgroundColor: 'white',
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
            })}>
            <Image
                resizeMode="center"
                style={styles.avatar}
                source={{ uri: user.avatar }}
            />
            <View>
                <Text>Chao ngay moi</Text>
                <Text style={styles.name}>{user.name}</Text>
            </View>
        </View >
    );
});

const styles = StyleSheet.create({
    avatar: {
        height: 100,
        width: 100,
        marginRight: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30
    }
});

const containerStyle = (props: ViewStyle) => ({
    ...props,
});