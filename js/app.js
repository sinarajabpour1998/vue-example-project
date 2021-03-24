new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue.js',
        fullName: '-',
        aTag: '<a href="https://google.com">Google</a>',
        aHref: 'https://yahoo.com'
    },
    methods: {
        changeFullname: function (event) {
            this.fullName = event.target.value;
        },
        sayHello: function () {
            return 'Hello';
        }
    }
})