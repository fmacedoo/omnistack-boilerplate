import React from 'react';
import { Route } from "react-router-dom";

// Layouts
import View from "../layout/View";

export const RouteView = (props) => {
    const Component = props.component;
    props = { ...props, component: undefined };

    const { fullscreen } = props;

    return (
        <Route {...props} render={() =>
            <View fullscreen={fullscreen}>
                <Component />
            </View>
        }
        />
    )
}