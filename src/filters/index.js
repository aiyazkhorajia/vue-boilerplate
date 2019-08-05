import uppercase from './upperCase';


export default {
    install(Vue) {
        Vue.filter('uppercase', uppercase);
    }
}