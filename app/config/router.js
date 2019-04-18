import { createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import Me from '../screens/Me';
import NewContact from '../screens/NewContact';

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

const Tabs = createBottomTabNavigator({
    Contacts: {
        screen: ContactsStack,
        navigationOptions: {
            title: 'Contacts'
        }
    },
    NewContact: {
        screen: NewContact,
        navigationOptions: {
            title: 'New Contacts'
        }
    },
    Me: {
        screen: Me,
        navigationOptions: {
            title: 'Me'
        }
    }
});

export const AppContainer = createAppContainer(Tabs);