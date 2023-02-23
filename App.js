import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import IntroScreen from './Screens/IntroScreen';
import SquareNews from './Screens/squareNews';
import HourlyProductionContainer from './Screens/HourlyProductionContainer';
import MachineOptimizationContainer from './Screens/MachineOptimizationContainer';
import CapacityAnalysisContainer from './Screens/CapacityAnalysisContainer';

const Stack =createNativeStackNavigator()
const Drawer = createDrawerNavigator();

export default function App() {

  return(
    <>
      <StatusBar style='dark'/>
      <NavigationContainer >
      {/* <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="HOME" component={IntroScreen} />
        <Drawer.Screen name="HOURLY PRODUCTION CONTAINER" component={HourlyProductionContainer} />
        <Drawer.Screen name="MACHINE OPTIMIZATION" component={MachineOptimizationContainer} />
        <Drawer.Screen name="CAPACITY ANALYSIS" component={CapacityAnalysisContainer} />
        <Drawer.Screen name="SQUARE NEWS" component={SquareNews}/>
      </Drawer.Navigator> */}
        <Stack.Navigator screenOptions={{animation: 'simple_push', headerStyle:{backgroundColor: "#9fff8c"}}}>
          <Stack.Screen options={{headerShown:false}} name="HOME" component={IntroScreen}/>
          <Stack.Screen name="HOURLY PRODUCTION CONTAINER" component={HourlyProductionContainer} options={{title:"SEWING PRODUCTION"}}/>
          <Stack.Screen name="MACHINE OPTIMIZATION" component={MachineOptimizationContainer}/>
          <Stack.Screen name="CAPACITY ANALYSIS" component={CapacityAnalysisContainer} options={{title:"CAPACITY ANALYSIS"}}/>
          <Stack.Screen name="SQUARE NEWS" component={SquareNews}/>
        </Stack.Navigator>
      </NavigationContainer>

    </>
  )
}