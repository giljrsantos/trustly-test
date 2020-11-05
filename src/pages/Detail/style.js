import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    viewInfo:{
        flexDirection: 'row',
        padding:3,
    },
    image: {
        width: '50%',
        marginHorizontal: 8,
        borderRadius: 20,
    },
    descriptionContent:{
        width: '50%',
        flexDirection: 'column',
    },
    payment: {
        fontSize: 24,
        marginHorizontal: '5%',
        marginTop: 30,      
    },
    formpayment:{
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    paycard:{
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    titleBanking:{
        fontSize: 18,
        color:'#565656',
        paddingHorizontal: '5%',
        textAlign: 'center'        
    },
    save:{
        fontSize: 14,
        color:'#565656',
        marginHorizontal: '10%',
        backgroundColor: '#FFCC00',
        textAlign: 'center',
        borderRadius: 5,
    },
    imagebank:{
        width: 220,
        height: 21,
    },    
    card:{
        width: 85,
        height: 24,
    },    
    applecard:{
        width: 52,
        height: 27,
    },    
    titleName: {
        fontSize: 30,
        paddingHorizontal: '2%',
    },
    name: {
        fontSize: 14,
        paddingHorizontal: '2%',
    },    
    dotContainer: {
        flexDirection: "row",
        marginVertical: '7%',
    },
    ListSize: {
        flexDirection: "row",
        width: '100%',
    },
    textContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: "2%",
        paddingHorizontal: "2%"
    },
    titleContent: {
        fontSize: 22,
        marginVertical: "2%"
    },
    descriptionContent: {
        lineHeight: 25,

    },
    textList: {
        fontSize: 22,
        lineHeight: 25,
    },
    line:{
        borderWidth: 1,
        borderBottomColor: "#ddd",
        marginVertical: "2%",
    },
    total:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'center',
    },
    totalinfo:{
        marginHorizontal: '5%'
    },
    value:{
        marginHorizontal: '5%'
    },
    cost:{
        fontSize: 18,
    },
    TextCost:{
        fontSize: 18,
        color: '#A5A5A5',
    },
    TextValue:{
        fontSize: 30,
        color: '#000',
    },
    titlePrice:{
        fontSize: 25,
        marginHorizontal: '2%'
    }

});

export default styles;