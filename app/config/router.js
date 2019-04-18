import { createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

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

const NewContactsStack = createStackNavigator({
    NewContact: {
        screen: NewContact,
        navigationOptions: {
            title: 'New Contacts'
        }
    },
});

const MeStack = createStackNavigator({
    Me: {
        screen: Me,
        navigationOptions: {
            title: 'Me'
        }
    },
});

const Tabs = createBottomTabNavigator({
    Contacts: {
        screen: ContactsStack,
        navigationOptions: {
            tabBarLabel: 'Contacts',
        }
    },
    NewContact: {
        screen: NewContactsStack,
        navigationOptions: {
            tabBarLabel: 'New Contacts'
        }
    },
    Me: {
        screen: MeStack,
        navigationOptions: {
            tabBarLabel: 'Me'
        }
    }
});

export const AppContainer = createAppContainer(Tabs);