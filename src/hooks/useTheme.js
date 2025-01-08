// import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {useState} from 'react';
import {MyDarkTheme, MyLightTheme} from '../assets/themes/themes';

export const useTheme = () => {
  const [myTheme, setMyTheme] = useState(MyLightTheme);

  const toggleTheme = () => {
    // setMyTheme(myTheme.dark ? MyLightTheme : MyDarkTheme);
  };

  return {
    myTheme,
    toggleTheme,
  };
};
