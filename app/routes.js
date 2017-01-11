import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, browserHistory, hashHistory, useRouterHistory } from 'react-router';
import { Provider } from 'react-redux';
import createHashHistory from 'history/lib/createHashHistory';

import store from './store';

const routes = {
    path: '/',
    component: require('modules/Home'),
    getChildRoutes(nextState, cb) {
        require.ensure([], require => {
            cb(null, [
                require('./modules/Ip'),
                require('./modules/Mobile'),
                require('./modules/Toutiao'),
                require('./modules/transitionToSelf'),
                require('./modules/CustomAttributes'),
                require('./modules/DidMountError'),
                require('./modules/EventArguments'),
                require('./modules/Animation'),
                require('./modules/getWrappedInstance'),
                require('./modules/SCU'),
                require('./modules/RouterHOC'),
                require('./modules/CallComponentMethodOutside'),
                require('./modules/core-js-or-babel-polyfill'),
                require('./modules/ImageZoom'),
                require('./modules/ReactPinchZoom'),
                require('./modules/SearchBook')
            ]);
        });
    }
};

const history = useRouterHistory(createHashHistory);

const Root = () => {
    return <Provider store={store}>
        <MuiThemeProvider>
            <Router history={__PROD__ ? history : browserHistory} routes={routes} />
        </MuiThemeProvider>
    </Provider>
};

export default Root;
