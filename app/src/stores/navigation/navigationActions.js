import { NavigationActions, StackActions } from 'react-navigation';

export const navigateTo = (routeName, params) => NavigationActions.navigate({
    routeName,
    params,
    // action?: NavigationNavigateAction,
    // key?: string,
});

export const replaceWith = (routeName, params) => StackActions.replace({
    routeName,
    params,
    // action?: NavigationNavigateAction,
    // key?: string,
});
