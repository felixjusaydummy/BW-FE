import React, { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const FindAccount3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/FindAccount3')));
const ChangePassword3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/ChangePassword3')));
// homepage routing
const HomeAccount = Loadable(lazy(() => import('views/pages/authentication/homescreen/Account')));
const HomeScreen = Loadable(lazy(() => import('views/pages/authentication/homescreen/Homescreen')));
const HomeWithdrawal = Loadable(lazy(() => import('views/pages/authentication/homescreen/Withdrawal')));
const HomeRewards = Loadable(lazy(() => import('views/pages/authentication/homescreen/Rewards')));
const HomeHistory = Loadable(lazy(() => import('views/pages/authentication/homescreen/History')));
const HomeCashin = Loadable(lazy(() => import('views/pages/authentication/homescreen/Cashin')));
const HomeProfile = Loadable(lazy(() => import('views/pages/authentication/homescreen/Profile')));
//withdrawal routing
const AccountForWithdrawal = Loadable(lazy(() => import('views/pages/authentication/homescreen/AccountForWithdrawal')));
const WithdrawConfirmation = Loadable(lazy(() => import('views/pages/authentication/homescreen/WithdrawConfirmation')));
// account routing
const Accounts = Loadable(lazy(() => import('views/pages/accounts/accounts1/Accounts')));
const Banks = Loadable(lazy(() => import('views/pages/accounts/accounts1/Banks')));
const AddAccount = Loadable(lazy(() => import('views/pages/accounts/accounts1/AddAccount')));
const SelectAccount = Loadable(lazy(() => import('views/pages/accounts/accounts1/SelectAccount')));
const OneTimePin = Loadable(lazy(() => import('views/pages/accounts/accounts1/OneTimePin')));
const Bank = Loadable(lazy(() => import('views/pages/accounts/accounts1/BDO')));
// loan application routing
const HomeLoan = Loadable(lazy(() => import('views/pages/authentication/homescreen/Loan')));
const Occupation = Loadable(lazy(() => import('views/pages/authentication/LoanApplicationModule/Occupation'))); //
const LoanAppForm = Loadable(lazy(() => import('views/pages/authentication/LoanApplicationModule/LoanAppForm'))); //
const LoanPurpose = Loadable(lazy(() => import('views/pages/authentication/LoanApplicationModule/LoanPurpose'))); //
const PersonalInfo = Loadable(lazy(() => import('views/pages/authentication/LoanApplicationModule/PersonalInfo'))); //
const EmploymentInfo = Loadable(lazy(() => import('views/pages/authentication/LoanApplicationModule/EmploymentInfo')));
const ExistingLoan = Loadable(lazy(() => import('views/pages/authentication/LoanApplicationModule/ExistingLoan')));
const CoBorrowerInfo = Loadable(lazy(() => import('views/pages/authentication/LoanApplicationModule/CoBorrowerInfo'))); //
const ApplicationSubmission = Loadable(lazy(() => import('views/pages/authentication/LoanApplicationModule/ApplicationSubmission')));
const SEApplicationSubmission = Loadable(lazy(() => import('views/pages/authentication/LoanApplicationModule/SEApplicationSubmission')));


// ===========================|| AUTHENTICATION ROUTING ||=========================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
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
        {
            path: '/pages/homescreen/account',
            element: <HomeAccount />
        },
        {
            path: '/pages/homescreen/homescreen',
            element: <HomeScreen />
        },
        {
            path: '/pages/withdrawal/withdraw',
            element: <HomeWithdrawal />
        },
        {
            path: '/pages/homescreen/rewards',
            element: <HomeRewards />
        },
        {
            path: '/pages/homescreen/history',
            element: <HomeHistory />
        },
        {
            path: '/pages/homescreen/cashin',
            element: <HomeCashin />
        },
        {
            path: '/pages/homescreen/profile',
            element: <HomeProfile />
        },
        {
            path: '/accounts',
            element: <Accounts />
        },
        {
            path: '/accounts/linked-accounts',
            element: <Banks />
        },
        {
            path: '/accounts/add',
            element: <AddAccount />
        },
        {
            path: '/accounts/add/select',
            element: <SelectAccount />
        },
        {
            path: '/accounts/add/verification',
            element: <OneTimePin />
        },
        {
            path: '/accounts/bank',
            element: <Bank />
        },
        {
            path: '/pages/homescreen/loan',
            element: <HomeLoan />
        },
        {
            path: '/pages/loanapplication/employmentstatus',
            element: <Occupation />
        },
        {
            path: '/pages/loanapplication/loanapplicationform',
            element: <LoanAppForm />
        },
        {
            path: '/pages/loanapplication/loanpurpose',
            element: <LoanPurpose />
        },
        {
            path: '/pages/loanapplication/personalinformation',
            element: <PersonalInfo />
        },
        {
            path: '/pages/loanapplication/employmentinformation',
            element: <EmploymentInfo />
        },
        {
            path: '/pages/loanapplication/coborrowerinformation',
            element: <CoBorrowerInfo />
        },
        {
            path: '/pages/loanapplication/existingloan',
            element: <ExistingLoan />
        },
        {
            path: '/pages/loanapplication/applicationsubmission',
            element: <ApplicationSubmission />
        },
        {
            path: '/pages/loanapplication/applicationsubmissionforselfemployed',
            element: <SEApplicationSubmission />
        },
        {
            path: '/pages/withdrawal/chooseaccount',
            element: <AccountForWithdrawal />
        },
        {
            path: '/pages/withdrawal/confirmation',
            element: <WithdrawConfirmation />
        }
    ]
};

export default AuthenticationRoutes;
