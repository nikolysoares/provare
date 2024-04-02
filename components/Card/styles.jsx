import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#355070',
        padding: 13,
        marginBottom: 23,
        height: 100,
        justifyContent: 'center',
        borderRadius: 25
    },
    componentes: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        resizeMode: 'cover',
        borderWidth: 3,
        height: 50,
        width: 50,
        borderColor: '#000000',
        borderRadius: 50
    },
    campo_texto:{
        flex: 1,
        padding: 13,
        color: '#000000',
        backgroundColor: '#CFCCD6',
        fontSize: 20,
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10
    },
})

export default styles