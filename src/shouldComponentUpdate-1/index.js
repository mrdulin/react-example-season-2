export default {
    path: 'shouldComponentUpdate-1',
    getComponents(nextState, cb) {
        require.ensure([
            './components'
        ], require => {
            console.log(cb);
            const component = require('./components').default;
            cb(null, {content: component});
        })
    }
}