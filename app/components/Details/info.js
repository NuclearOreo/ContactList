import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import styles from './styles';
import Row from './row';
import { capitalizeFirstLetter } from '../../helpers/string'

const Info = ({location, dob, login, registered}) => {
    return (
        <View style={styles.infoContainer}>
            <Row
                Label='City'
                body={capitalizeFirstLetter(location.city)}
            />
            <Row
                Label='Birthday'
                body={moment(dob).format('MMMM Do, YYYY ')}
            />
            <Row
                Label='Registered'
                body={moment(registered).format('MMMM Do, YYYY ')}
            />
            <Row
                Label='Username'
                body={login.username}
            />
        </View>
    );
}

export default Info;