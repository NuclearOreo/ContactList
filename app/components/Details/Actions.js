import React from 'react';
import { View, TouchableOpacity, Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../config/colors';
import styles, { ICON_SIZE } from './styles';
import { toPhoneNumber } from '../../helpers/string';

const Actions = ({ email, cell, phone }) => {
    return (
        <View style={styles.actionContainer}>
            <View style={styles.actionRow}>
                <View style={styles.actionInfo}>
                    <Text style={styles.actionLabel}>email</Text>
                    <Text style={styles.actionBody}>{email}</Text>
                </View>
                <View style={styles.actionIcons}>
                    <TouchableOpacity onPress={() => null}>
                        <Icon
                            colors={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.actionRow}>
                <View style={styles.actionInfo}>
                    <Text style={styles.actionLabel}>Cell</Text>
                    <Text style={styles.actionBody}>{toPhoneNumber(cell)}</Text>
                </View>
                <View style={styles.actionIcons}>
                    <TouchableOpacity onPress={() => null}>
                        <Icon
                            colors={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => null}>
                        <Icon
                            colors={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios' ? 'ios-text' : 'md-text'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.actionRow}>
                <View style={styles.actionInfo}>
                    <Text style={styles.actionLabel}>Home</Text>
                    <Text style={styles.actionBody}>{toPhoneNumber(phone)}</Text>
                </View>
                <View style={styles.actionIcons}>
                    <TouchableOpacity onPress={() => null}>
                        <Icon
                            colors={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Actions; 