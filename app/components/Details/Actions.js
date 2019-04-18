import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import { toPhoneNumber } from '../../helpers/string';
import Row from './row';

const Actions = ({ email, cell, phone }) => {
    return (
        <View style={styles.actionContainer}>
            <Row 
                Label='Email'
                body={email}
                actions={[
                        {
                            onPress: () => null,
                            ios: 'ios-mail',
                            android: 'md-mail'
                        }
                    ]
                }
            />
            <Row 
                Label='Cell'
                body={cell}
                actions={[
                        {
                            onPress: () => null,
                            ios: 'ios-call',
                            android: 'md-call'
                        },
                        {
                            onPress: () => null,
                            ios: 'ios-text',
                            android: 'md-text'
                        }
                    ]
                }
            />
            <Row 
                Label='Home'
                body={toPhoneNumber(phone)}
                actions={[
                        {
                            onPress: () => null,
                            ios: 'ios-call',
                            android: 'md-call'
                        }
                    ]
                }
            />
        </View>
    );
}

export default Actions; 