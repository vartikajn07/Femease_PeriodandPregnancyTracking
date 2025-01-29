//language choosing screen
import React, { useEffect, useState } from 'react';
import { Keyboard, Modal, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { AppText, BLACK, MEDIUM, SIXTEEN, WHITE } from '../../common/AppText';
import { AppSafeAreaView } from '../../common/AppSafeAreaView';
import { COLORS, FONTS } from '../../constants/themes';
import { RootStackParamList } from '../../routes/RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import i18n, { languageResources } from '../../../services/i18n';
import { FlatList } from 'react-native-gesture-handler';
import languagesList from "../../../services/languagesList.json"


type Language = {
    name: string;
    nativeName: string;
}
const typedLanguagesList: Record<string, Language> = languagesList;

type NavigationProp = StackNavigationProp<RootStackParamList, 'RegisterUser'>;

function Welcome(): React.JSX.Element {
    const { t } = useTranslation()
    const [visible, setVisible] = useState(false)
    const navigation = useNavigation<NavigationProp>();

    const changeLng = (lng: string) => {
        i18n.changeLanguage(lng)
        setVisible(false)
    }
    return (
        <AppSafeAreaView>
            <Modal visible={visible} animationType="slide" onRequestClose={() => setVisible(false)}>
                <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
                    <FlatList data={Object.keys(languageResources)} renderItem={({ item }) => (<TouchableOpacity onPress={() => changeLng(item)}><AppText>{languagesList[item as keyof typeof languagesList].nativeName}</AppText></TouchableOpacity>)} />
                </View>
            </Modal>

            <AppText>{t('Welcome')}</AppText>
            <TouchableOpacity onPress={() => { setVisible(true) }}>
                <AppText>{t('changelanguage')}</AppText>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('RegisterUser')}
            >
                <AppText
                    weight={MEDIUM}
                    type={SIXTEEN}
                    color={BLACK}
                    style={{ textAlign: 'center' }}>
                    {t('Next')}
                </AppText>
            </TouchableOpacity>

        </AppSafeAreaView>
    );
}

const styles = StyleSheet.create({
    innercontainer: {
        flex: 1,
        gap: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    txtInput: {
        fontFamily: FONTS.SemiBold,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: COLORS.primary,
        borderRadius: 8,
        color: COLORS.black,
        fontSize: 18,
        letterSpacing: 1,
        height: 45,
        width: 300,
    },
    Nextbtn: {
        position: 'absolute',
        bottom: 70,
        backgroundColor: '#E392A1',
        color: '#ffff',
        width: 300,
        marginHorizontal: 'auto',
        paddingVertical: 10,
        borderRadius: 8,
    },
});

export default Welcome;
