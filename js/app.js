new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue.js',
        fullName: '-',
        aTag: '<a href="https://google.com">Google</a>',
        aHref: 'https://yahoo.com',
        counter: 0,
        x: 0,
        y: 0,
        name: '',
        x_increment: 0,
        x_increment_msg: ''
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
        },
        increaseX: function () {
            this.x_increment ++;
            this.checkIncrement;
        },
        decreaseX: function () {
            this.x_increment --;
            this.checkIncrement;
        }
    },
    computed: {
        checkIncrement: function () {
            console.log('computed');
            if (this.x_increment > 5){
                this.x_increment_msg = 'the increment is grater than 5';
            }else {
                this.x_increment_msg = 'the increment is lower than 5';
            }
        }
    },
    watch: {
        x_increment: function () {
            var xi = this;
            setTimeout(function () {
                xi.x_increment = 200;
            },2000);
            this.checkIncrement;
        }
    }
})