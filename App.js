import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import textInputs from './components/textInputs';
import DisplayInputs from './components/DisplayInputs';

/*import React from 'react';

import textInputs from './components/textInputs';
import DisplayInputs from './components/DisplayInputs';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="DisplayInputs" component={DisplayInputs} />
        <Stack.Screen name="textInputs" component={textInputs} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}*/


const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="textInputs" component={textInputs} />
        <Stack.Screen name="DisplayInputs" component={DisplayInputs} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = ({
  container:{
    flex: 1,
    backgroundColor: '#FF9700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttnContainer:{
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6
  }
  })
