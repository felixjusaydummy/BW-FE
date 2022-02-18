import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const FindAccount3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/FindAccount3')));
const ChangePassword3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/ChangePassword3')));

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        // {
        //     path: '/',
        //     element: <DashboardDefault />
        // },
        // {
        //     path: '/dashboard/default',
        //     element: <DashboardDefault />
        // },
        // {
        //     path: '/utils/util-typography',
        //     element: <UtilsTypography />
        // },
        // {
        //     path: '/utils/util-color',
        //     element: <UtilsColor />
        // },
        // {
        //     path: '/utils/util-shadow',
        //     element: <UtilsShadow />
        // },
        // {
        //     path: '/icons/tabler-icons',
        //     element: <UtilsTablerIcons />
        // },
        // {
        //     path: '/icons/material-icons',
        //     element: <UtilsMaterialIcons />
        // },
        // {
        //     path: '/sample-page',
        //     element: <SamplePage />
        // },
        {
            path: '/',
            element: <AuthLogin3 />
        },
        {
            path: '/pages/login/login3',
            element: <AuthLogin3 />
        },
        {
            path: '/pages/register/register3',
            element: <AuthRegister3 />
        },
        {
            path: '/pages/findaccount/findaccount3',
            element: <FindAccount3 />
        },
        {
            path: '/pages/changepassword/changepassword3',
            element: <ChangePassword3 />
        },
    ]
};

export default MainRoutes;
