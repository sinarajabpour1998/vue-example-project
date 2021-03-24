new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue.js',
        fullName: '-',
    },
    methods: {
        changeFullname: function (event) {
            this.fullName = event.target.value;
        }
    }
})