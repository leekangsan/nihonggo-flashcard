var app = new Vue({
    el: '#app',
    data: {
        screen: 0
    },
    methods: {
        goToScreen: function (screenIndex) {
            this.screen = screenIndex;
        }
    }
});
