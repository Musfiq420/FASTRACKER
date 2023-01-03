import axios from "axios"
import { useEffect, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View, Modal, TextInput, Button } from "react-native"
import SwitchSelector from "react-native-switch-selector"
import BarCode from "../Components/BarcodeScanner"

function BreakdownScanner(){
    const [scannerOpen, setScannerOpen] = useState(false)
    const [data, setData] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [breakdownType, setBreakdownType] = useState("start")
    
    const options = [
        { label: "Start", value: "start", activeColor: 'green'},
        { label: "End", value: "end", activeColor: 'green'}
    ];


    useEffect(() => {
        console.log('data useEffect called');
        setOpenModal(true);
        setScannerOpen(false);
    }, [data])

    const sendDataToServer = async(data) => {
        await axios.patch('https://firsttrial-cff1d-default-rtdb.firebaseio.com/machineBreakdown.json', {"scannedData":data})
    }

    return(
        <View style={styles.mainContainer}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={openModal}
            onRequestClose={() => {
            setOpenModal(false);
            setScannerOpen(false);
            }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Machine Breakdown</Text>
                        <TextInput placeholder="Line no" />
                        <Text>Machine ID: {data}</Text>
                        <Text>Machine Name: Overlock</Text>
                        <Text>Company: Juki</Text>
                        <View style={{height:50, width:200 }}>
                            <SwitchSelector
                                style={{paddingBottom:20}}
                                options={options}
                                initial={0}
                                onPress={setBreakdownType}  
                                backgroundColor='#c2f8cb'
                            />
                        </View>
                        <View style={styles.button}>
                        <Button  title="Submit" color={'green'} onPress={async() => {
                            await sendDataToServer(data);
                            setScannerOpen(false);
                            setOpenModal(false);
                            }} />
                        </View>
                        
                    </View>
                </View>
            </Modal>


            {scannerOpen?
            <View style={styles.scannerContainer}>
                <BarCode setData={setData} />
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})


export default BreakdownScanner