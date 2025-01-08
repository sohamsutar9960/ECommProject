import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_left',
      }}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
