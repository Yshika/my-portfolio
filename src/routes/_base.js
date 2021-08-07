import { lazy } from 'react';

export const RouteName = {
    Home: '/',
    CV: '/CV',
    RP: '/research-papers',
    contact: '/contact-info'
};

const RouteArray = [
    {
        route: RouteName.Home,
        title: 'Yshika-PORTFOLIO',
        Component: lazy(() => import("../pages/Home")),
    },
    {
        route: RouteName.CV,
        title: 'Yshika-CV',
        Component: lazy(() => import("../pages/CV")),
    }, {
        route: RouteName.RP,
        title: "Yshika-RESEARCH PAPERS",
        Component: lazy(() => import("../pages/RP"))
    },
    {
        route: RouteName.contact,
        title: "Yshika-CONTACT INFO",
        Component: lazy(() => import("../pages/ContactInfo"))
    }
];

export default RouteArray;