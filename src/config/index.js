import { StatusBar } from 'react-native';

class Config{

    hideStatusBar = () =>{
        StatusBar.setHidden(true, 'slide');
    }
}

export default config = new Config();