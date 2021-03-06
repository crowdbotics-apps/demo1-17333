import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile51179Navigator from '../features/UserProfile51179/navigator';
import Tutorial51178Navigator from '../features/Tutorial51178/navigator';
import NotificationList51150Navigator from '../features/NotificationList51150/navigator';
import Settings51149Navigator from '../features/Settings51149/navigator';
import Settings51141Navigator from '../features/Settings51141/navigator';
import UserProfile51139Navigator from '../features/UserProfile51139/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile51179: { screen: UserProfile51179Navigator },
Tutorial51178: { screen: Tutorial51178Navigator },
NotificationList51150: { screen: NotificationList51150Navigator },
Settings51149: { screen: Settings51149Navigator },
Settings51141: { screen: Settings51141Navigator },
UserProfile51139: { screen: UserProfile51139Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
