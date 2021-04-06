import React from 'react';
import {
  ActivityIndicator,
  YellowBox,
} from 'react-native';
import DayView from './views/DayView';
import EventView from './views/EventView';
import MonthView from './views/MonthView';
import { CreateEditVenue, VenueList } from './views/VenueViews';
import { Homepage } from './views/Homepage';
import { ClientView, ManageClients } from './views/ClientViews';
import Database from './Database';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import _ from 'lodash';
import LoginView from './views/LoginView';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import AppContainer from './components/AppContainer';
import DocumentationView from './views/DocumentationView';

// Firebase's implementation utilizes long timers,
// which React Native doesn't like and throws a warning,
// so this is here to ignore that.
YellowBox.ignoreWarnings(['Setting a timer']);

//stores all clients/events/venues loaded from the database, to prevent unnecessary db calls
let loadedData = {
  clients: null,
  events: null,
  venues: null,
  viewedMonths: null,
};

let db = null;

@withMappedNavigationProps()
class LoadingScreen extends React.Component {
  componentWillMount() {
    db = new Database();

    Promise.all([
      db.getClients(),
      db.getCurrentMonthAndUpcomingEvents(),
      db.getVenues(),
    ])
      .then((values) => {
        this.props.navigation.navigate('Homepage', {
          database: db,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <AppContainer>
        <ActivityIndicator size='large' />
      </AppContainer>
    );
  }
}

const AppStack = createStackNavigator(
  {
    Month: MonthView,
    Day: DayView,
    Event: EventView,
    CreateEditVenue: CreateEditVenue,
    VenueList: VenueList,
    Homepage: Homepage,
    Client: ClientView,
    ClientManage: ManageClients,
    Documentation: DocumentationView,
  },
  {
    initialRouteName: 'Homepage',
    headerMode: 'none',
    cardOverlayEnabled: true,
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginView,
      Loading: LoadingScreen,
      App: AppStack,
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none',
    }
  )
);
