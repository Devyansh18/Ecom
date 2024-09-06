import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import {COLORS, SIZES} from '../../Constants/theme';
import NotificationCard from '../../Components/NotificationCard';
import {notifications} from '../../Constants/data';
import Icon from 'react-native-vector-icons/Ionicons';

const Notification = ({navigation}) => {
  const navigateToBack = () => {
    navigation.goBack();
  };

  const renderNotification = ({item}) => {
    const isHighlighted = item.id === '1' || item.id === '4' || item.id === '5' || item.id === '7' || item.id === '9' ;

    return (
      <TouchableOpacity
        style={[
          styles.NotificationView,
          isHighlighted && styles.highlightedItem,
        ]}>
        {isHighlighted && (
          <Icon name="ellipse" size={10} style={styles.botIcon} />
        )}

        <View style={styles.imageView}>
          <Image source={item.icon} style={styles.icon} />
        </View>
        <View style={{paddingHorizontal: SIZES.width * 0.05, width: SIZES.width * 0.65 ,}}>
          <Text style={{color: 'black'}}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.MainContainer}>
      <Header title={'Notifications'} onPress={navigateToBack} />
      <ScrollView
        style={{paddingVertical: 10, paddingHorizontal: SIZES.width * 0.06}}>
        <View style={styles.TodayView}>
          <Text style={styles.todayText}>Today</Text>
          <TouchableOpacity
            style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
            <Text style={styles.clearText}>Clear all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={notifications.filter(
            notification => notification.time === 'Today',
          )}
          renderItem={renderNotification}
          keyExtractor={item => item.id}
        />
        <Text style={styles.timeSection}>Earlier</Text>
        <FlatList
          data={notifications.filter(
            notification => notification.time === 'Earlier',
          )}
          renderItem={renderNotification}
          keyExtractor={item => item.id}
        />
       
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  icon: {
    height: SIZES.height * 0.04,
    width: SIZES.width * 0.08,
    // marginRight: 15,
  },
  timeSection: {
    fontSize: SIZES.width * 0.05,
    fontWeight: 'bold',
    marginVertical: SIZES.height * 0.01,
    color: 'black',
  },
  TodayView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: SIZES.height * 0.02,
  },
  todayText: {
    fontWeight: 'bold',
    fontSize: SIZES.width * 0.05,
    color: 'black',
  },
  clearText: {
    fontWeight: '600',
    fontSize: SIZES.width * 0.035,
    color: COLORS.primary,
    marginRight: SIZES.width * 0.04,
  },
  NotificationView: {
    backgroundColor: "white",
    width: SIZES.width * 0.86,
    height: SIZES.height * 0.1,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: SIZES.height * 0.015,
    flexDirection: 'row',
    paddingHorizontal: SIZES.width * 0.04,
  },
  imageView: {
    height: SIZES.height * 0.06,
    // width: SIZES.width * 0.13,
    width: '15%',
    borderRadius: SIZES.width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGray1,
  },
  highlightedItem: {
    backgroundColor: '#e8f3fc', 
  },
  botIcon: {
    position: 'absolute',
    right: 15,
    top: 10,
    color: '#1977f3',
  },
});

export default Notification;
