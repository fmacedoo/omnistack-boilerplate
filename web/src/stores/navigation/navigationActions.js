import { push } from 'connected-react-router';

export const navigateTo = (routeName) => {
    return push(routeName);
    
}