export default {
    install(Vue) {
        const { EventBus } = require('./event-bus');
        const { SDK } = require('./sdk');
        Vue.prototype.$bus = EventBus;
        Vue.prototype.$sdk = SDK;
    }
};
