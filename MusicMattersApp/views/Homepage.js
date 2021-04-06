import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Database from '../Database';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import AppContainer from '../components/AppContainer';
import Styles from '../styles';
import _ from 'lodash';
import { Dimensions, Platform, PixelRatio } from 'react-native';

@withMappedNavigationProps()
export class Homepage extends React.Component {
  static propTypes = {
    database: PropTypes.instanceOf(Database).isRequired,
  };

  constructor(props) {
    super(props);
  }

  _renderVenue(venue) {
    return (
      <View style={VenueStyles.entryContainer}>
        <TouchableOpacity
          style={VenueStyles.entryName}
          onPress={() => {
            this.props.navigation.navigate('Month', {
              selectedVenue: venue,
              database: this.props.database,
            });
          }}
        >
          <Text>{venue.name}</Text>
        </TouchableOpacity>
        <View style={VenueStyles.entryButton}>
          <Button
            title='⚙️🔧'
            onPress={() =>
              this.props.navigation.navigate('Venue', {
                venue: venue,
                database: this.props.database,
                onSave: (venue) => {
                  this.props.database
                    .updateVenue(venue)
                    .catch((err) => console.log(err));
                  this.forceUpdate();
                },
                onDelete: (venue) => {
                  this.props.database
                    .removeVenue(venue)
                    .catch((err) => console.log(err));
                  this.forceUpdate();
                },
              })
            }
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <AppContainer>
        <View style={Styles.contentContainer}>
          <Image
            source={require('../assets/icon-transparent.png')}
            style={VenueStyles.icon}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={VenueStyles.main_font}>Music Matters</Text>

          <Text style={VenueStyles.main_font}>BS</Text>

          <Text style={VenueStyles.main_font}>(Booking System)</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text> </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text> </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text> </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              title='Client'
              onPress={() => {
                this.props.navigation.navigate('ClientManage', {
                  database: this.props.database,
                });
              }}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              title='Venue'
              onPress={() =>
                this.props.navigation.navigate('VenueList', {
                  database: this.props.database,
                  onSave: (venue) => {
                    this.props.database.addVenue(venue).then((venue) => {
                      this.forceUpdate();
                    });
                  },
                })
              }
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
      </View>
      </AppContainer>
    );
  }
}


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;
export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const VenueStyles = StyleSheet.create({
  entryContainer: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    padding: 7,
    margin: 3,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  main_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main_buttonContainer: {
    flex: 1,
  },
  entryName: {
    flexGrow: 3,
    flexBasis: 60,
    fontSize: 25,
  },
  main_font: {
    fontSize: 35,
    color: 'blue',
  },
  entryButton: {
    flexGrow: 1,
    flexBasis: 40,
  },
  stateContainer: {
    flexGrow: 1,
    flexBasis: 0,
    marginRight: 10,
  },
  stateTitle: {
    flexGrow: 2,
  },
  stateInput: {
    flexGrow: 1,
  },
  zipContainer: {
    flexGrow: 2,
    flexBasis: 0,
  },
  /* NEW CODE - Kaitlin - Monthly Send Out/Preset Time Slots/ScrollView Styles*/
  dayContainer: {
    flexGrow: 2,
    flexBasis: 0,
    marginRight: 8,
  },
  dayTitle: {
    flexGrow: 6,
    fontSize: 18,
  },
  timeContainer: {
    flexGrow: 1,
    flexBasis: 0,
  },
  timeTitle: {
    fontSize: 18,
    flexGrow: 1,
    marginRight: 3,
  },
  submit: {
    backgroundColor: '#68a0cf',
    overflow: 'hidden',
  },

  timeInput: {
    flexGrow: 4,
  },
  scrollView: {
    flexGrow: 1,
    width: '100%',
  },
  timeSlotTitle: {
    flexGrow: 1,
    fontSize: 18,
  },
  icon: {
    height: 200,
    width: 200,
    marginBottom: 50,
    marginTop: 30,
    alignItems: 'center',
  },
});
