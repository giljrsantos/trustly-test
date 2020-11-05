import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shoesImg: {
        width: 297.32,
        height: 171.18,
        borderRadius: 6
    },
    shoesText: {
        fontSize: 16
    },
    SizeQuantity:{
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    ViewSize:{
        flexDirection: 'row',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'transparent',
        alignItems: 'center',
        padding: 10,
    },
    TextSize:{
        fontSize: 12,
        lineHeight: 18,
        color: '#8D8D8D',
    },
    size:{
        width: 100,
        height: 27.93,
        borderRadius: 25.23,
        borderWidth: 0.90,
        borderStyle: 'solid',
        borderColor: '#e8e8e8',
        fontSize: 12,
        padding:5,
        lineHeight: 18,
        color: '#8D8D8D',
        marginLeft: 2,
    },
    ViewQuantity:{
        flexDirection: 'row',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'transparent',
        alignItems: 'center',
        padding: 10,     
    },
    TextQuantity:{
        fontSize: 12,
        lineHeight: 18,
        color: '#8D8D8D',
    }, 
    quantity:{
        width: 100,
        height: 27.93,
        borderRadius: 25.23,
        borderWidth: 0.90,
        borderStyle: 'solid',
        borderColor: '#e8e8e8',
        fontSize: 12,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding:5,
        lineHeight: 18,
        color: '#8D8D8D',
        marginLeft: 2,
    },
    imageShoe:{
        marginTop: 20,
        justifyContent: 'flex-end'
    },
    shoesPrice: {
        fontSize: 18,
        color: '#000',
        marginTop: 5,
    },
    btnContainer: {
        width: "90%",
        height: 50,
        backgroundColor: "#6B8067",
        borderRadius: 5,
        marginVertical: "5%",
        justifyContent: "center",
        alignItems: "center",

    },
    titleButton: {
        fontSize: 18,
        color: "#fff",
    }
});

export default styles;