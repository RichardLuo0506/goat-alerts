(function() {
    'use strict';

    angular
        .module('APP', [])
        .controller('core', core)
        .directive('backgroundSrc', backgroundSrc);

    core.$inject = [];

    function core() {
        var vm = this;

        vm.signals = [{
                name: 'Wavey Gnome',
                imgUrl: 'https://images5.alphacoders.com/313/thumb-1920-313729.jpg'
            },
            {
                name: 'Gnome Bands',
                imgUrl: 'https://icdn4.digitaltrends.com/image/4771346_l-720x720.jpg'
            }, {
                name: 'Basic Gnome',
                imgUrl: 'https://cdn.cryptohopper.com/images/signals/cryptognome.png'
            }, {
                name: 'CryptoFace God Alerts',
                imgUrl: 'https://yt3.ggpht.com/-2DpKis4ne2c/AAAAAAAAAAI/AAAAAAAAAAA/6Qxpt_qV7HE/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg',
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
})();