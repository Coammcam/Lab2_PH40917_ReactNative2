import { FC, memo } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

type FooterType = {
    timeUpdate: string;
    backgroundColor: string;
};

export const Footer: FC<FooterType> = memo(props => {

    const { timeUpdate, backgroundColor } = props;

    return (
        <View 
        style={containerStyle({
            height: 100,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
            // position: 'absolute',
            // bottom: 0,
            // left: 0,
            // right: 0,
            })}>
            <Text style={styles.text}>Thoi gian ban cap nhat thong tin {timeUpdate}</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

const containerStyle = (props: ViewStyle) => ({
    ...props,
});