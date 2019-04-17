import { AppNavigator } from '../../containers/Navigator';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

export const navigationReducer = createNavigationReducer(AppNavigator);