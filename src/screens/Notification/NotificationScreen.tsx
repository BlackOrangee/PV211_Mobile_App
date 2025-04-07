import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const notifications = [
    {id: '1', title: 'New message from John Snow'},
    {id: '2', title: 'Your order has been shipped'},
    {id: '3', title: 'Meeting with team at 15:00'},
    {id: '4', title: 'Your order has been delivered'},
];

const NotificationScreen = () => {
    const renderItem = ({item}: any) => (
        <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={notifications}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListEmptyComponent={<Text>Нет уведомлений</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    notificationItem: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
    },
    notificationText: {
        fontSize: 16,
    },
});

export default NotificationScreen;
