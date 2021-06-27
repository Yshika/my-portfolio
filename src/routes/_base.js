import { lazy } from 'react';

export const RouteName = {
    Home: '/'
};

const RouteArray = [
    {
        route: RouteName.Home,
        title: 'PORTFOLIO',
        Component: lazy(() => import("../pages/Home")),
    },
];

export default RouteArray;