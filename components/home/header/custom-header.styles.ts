import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    bike: {
        height: 30,
        width: 30,
        backgroundColor: 'white',
        borderRadius: 50
    },
    titleContainer: {
        flex: 1,
    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50

    },
    title: {
        color: Colors.medium
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    location:{
        flexDirection:'row',
        alignItems: 'center',        
    }
});

export default styles;