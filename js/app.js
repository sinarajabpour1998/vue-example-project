new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue.js',
        fullName: '-',
        aTag: '<a href="https://google.com">Google</a>',
        aHref: 'https://yahoo.com',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        changeFullname: function (event) {
            this.fullName = event.target.value;
        },
        sayHello: function () {
            return 'Hello';
        },
        increaseValue: function () {
            this.counter ++;
        },
        decreaseValue: function (val, event) {
            if (this.counter != 0 && this.counter != 1){
                this.counter -= val;
            }else {
                alert('Counter can not be ' + this.counter);
            }
            console.log(event);
        },
        coordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        stopCoordinate: function (event) {
            event.stopPropagation();
        },
        validateText: function () {
            alert('Enter pressed!');
        }
    }
})