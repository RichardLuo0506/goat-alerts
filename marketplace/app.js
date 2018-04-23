angular
    .module('APP', [])
    .controller('core', core)
    .directive('backgroundSrc', backgroundSrc);

core.$inject = [];

function core() {
    var vm = this;

    vm.signals = [{
            name: 'Wavey Gnome',
            imgURL: 'https://images5.alphacoders.com/313/thumb-1920-313729.jpg',
            price: 100,
            description: 'Technical analyst. Short-Long trades.',
            signal_count: 69,
            profit_pct: '400%',
            telegram: ''
        },
        {
            name: 'Gnome Bands',
            imgURL: 'https://icdn4.digitaltrends.com/image/4771346_l-720x720.jpg',
            price: 100,
            description: "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
            signal_count: 69,
            profit_pct: '400%',
            telegram: '#',
        }, {
            name: 'Basic Gnome',
            imgURL: 'https://cdn.cryptohopper.com/images/signals/cryptognome.png',
            price: 5,
            description: "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
            signal_count: 69,
            profit_pct: '400%',
            telegram: '#',
        }, {
            name: 'CryptoFace God Alerts',
            imgURL: 'https://cdn4.iconfinder.com/data/icons/hotel-services-2/80/Hotel_service_icons-01-512.png',
            price: 400,
            description: "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.",
            signal_count: 69,
            profit_pct: '400%',
            telegram: '#',
            subscribed: true
        }
    ];
}

function backgroundSrc() {
    var directive = {
        restrict: 'A',
        link: linkFunc
    };

    return directive;

    function linkFunc(scope, element, attr) {
        attr.$observe('backgroundSrc', function(value) {
            element.css({
                'background-image': 'url(' + value + ')',
                'background-size': 'cover'
            });
        });
    }
}