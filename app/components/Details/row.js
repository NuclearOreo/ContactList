import React from 'react';
import { View, TouchableOpacity, Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../config/colors';
import styles, { ICON_SIZE } from './styles';

const Row = ({ Label, body, actions=[] }) => {
    return (
        <View style={styles.actionRow}>
        <View style={styles.actionInfo}>
            <Text style={styles.actionLabel}>{Label}</Text>
            <Text style={styles.actionBody}>{body}</Text>
        </View>
        <View style={styles.actionIcons}>
            {actions.map( (action, index) => (
                <TouchableOpacity onPress={action.onPress} key={index}>
                    <Icon
                        colors={colors.link}
                        size={ICON_SIZE}
                        style={styles.actionIcon}
                        name={Platform.OS === 'ios' ? action.ios : action.android}
                    />
                </TouchableOpacity>
            ))}
        </View>
    </View>
    );
};

export default Row;