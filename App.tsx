import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigator/Main.navigator';

export default function App() {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
}
