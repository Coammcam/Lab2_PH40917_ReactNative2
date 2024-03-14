import { View, Text, ToastAndroid, TextInput, Button, StyleSheet } from "react-native";
import { UserType } from "./Main";
import { FC, memo, useState } from "react";

type BodyType = {
    onUpdateInfor: (user: UserType) => void;
    onClickChangeBgFooter: () => void;
}

export const Body: FC<BodyType> = memo(props => {
    const { onUpdateInfor, onClickChangeBgFooter } = props;

    const [name, setName] = useState('');
    const [linkImage, setLinkImage] = useState('');


    const handleChangeInfor = () => {
        if (name.length > 0 && linkImage.length > 8) {
            onUpdateInfor({ name, avatar: linkImage });
        } else {
            ToastAndroid.show('Khong duoc de trong', ToastAndroid.SHORT);
        }
    }

    return (
        <View style={styles.bodycontent}>
            <TextInput
                onChangeText={setName}
                placeholder="Ten"
                value={name}
            />
            <TextInput
                onChangeText={setLinkImage}
                placeholder="Link anh"
                value={linkImage}
            />
            
            <Button
                title="Cap nhat thong tin" 
                onPress={handleChangeInfor}
            />

            <Button
                title="Doi mau Footer"
                onPress={onClickChangeBgFooter}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    bodycontent: {
        padding: 10
    }
});