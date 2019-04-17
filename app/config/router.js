import { createStackNavigator, createAppContainer } from 'react-navigation';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';



const ContactsStack = createStackNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions: {
            title: 'Contacts'
        }
    },
    Details: {
        screen: Details,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name.first} ` + `${navigation.state.params.name.last}`
        })
    }
});

export const AppContainer = createAppContainer(ContactsStack);