import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BarCode from "../Components/BarcodeScanner"

function BreakdownScanner(){
    const [scannerOpen, setScannerOpen] = useState(false)
    return(
        <View style={styles.mainContainer}>
            {scannerOpen?
            <View style={styles.scannerContainer}>
                <BarCode setScannerOpen={setScannerOpen} />
            </View>
            :<TouchableOpacity
                style={styles.scannerButton}
                onPress={() => setScannerOpen(true)}
            >
            <Text style={styles.scannerButtonText}>Scan</Text>
            </TouchableOpacity>}
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1, 
        backgroundColor:'gray', 
        justifyContent:'center', 
        alignItems:'center'
    },
    scannerContainer: {
        height:"100%", 
        width:"100%"
    },
    scannerButton: {
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'palegreen',
        borderRadius:100,
    },
    scannerButtonText: {
        fontWeight:'bold', 
        fontSize:20
    }
})


export default BreakdownScanner