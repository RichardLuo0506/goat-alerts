angular
    .module('APP', ['ngTable', 'chart.js'])
    .controller('core', core)
    .directive('backgroundSrc', backgroundSrc)
    .config(['ChartJsProvider', function(ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            chartColors: ['#7b7bdd'],
            responsive: true
        });
        // Configure all line charts
        ChartJsProvider.setOptions('line', {
            showLines: true
        });
    }])
core.$inject = ['NgTableParams', '$scope'];

function core(NgTableParams, $scope) {
    var vm = this;

    init();

    function init() {
        vm.signals = [{
                id: 1,
                name: 'Wavey Gnome',
                imgURL: 'https://images5.alphacoders.com/313/thumb-1920-313729.jpg',
                price: 100,
                description: 'Technical analyst. Short-Long trades.',
                signal_count: 4929,
                profit_pct: 148,
                subscriber_count: 4553,
                discord: '#',
                entries: [{
                        coin: 'YOYO',
                        exchange: 'Binance',
                        baseCurrency: 'ETH',
                        date: 1525057161548,
                        high: 4.23,
                        low: -1.23
                    },
                    {
                        coin: 'JEW',
                        exchange: 'Bittrex',
                        baseCurrency: 'BTC',
                        date: 1528057261548,
                        high: 5.34,
                        low: -12.34
                    },
                    {
                        coin: 'XRP',
                        exchange: 'Bittrex',
                        baseCurrency: 'BTC',
                        date: 1525457551548,
                        high: 7.77,
                        low: -0.39
                    },
                    {
                        coin: 'CTR',
                        exchange: 'Binance',
                        baseCurrency: 'ETH',
                        date: 1525357561548,
                        high: 7.91,
                        low: -12.34
                    },
                    {
                        coin: 'STEEM',
                        exchange: 'Binance',
                        baseCurrency: 'BTC',
                        date: 1525057561548,
                        high: 0.28,
                        low: -0.02
                    }
                ]
            },
            {
                id: 2,
                name: 'Gnome Bands',
                imgURL: 'https://icdn4.digitaltrends.com/image/4771346_l-720x720.jpg',
                price: 100,
                description: "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
                signal_count: 22039,
                profit_pct: 231,
                subscriber_count: 2634,
                telegram: '#',
                facebook: '#',
                entries: [{
                        coin: 'ADA',
                        exchange: 'Binance',
                        baseCurrency: 'ETH',
                        date: 1525057161548,
                        high: 22.54,
                        low: -5.55
                    },
                    {
                        coin: 'NEO',
                        exchange: 'Bittrex',
                        baseCurrency: 'BTC',
                        date: 1528057261548,
                        high: 12.32,
                        low: -2.55
                    },
                    {
                        coin: 'XLM',
                        exchange: 'Bittrex',
                        baseCurrency: 'BTC',
                        date: 1525457551548,
                        high: 5.35,
                        low: -0.03
                    },
                    {
                        coin: 'XRP',
                        exchange: 'Binance',
                        baseCurrency: 'ETH',
                        date: 1525357561548,
                        high: 7.91,
                        low: -1.45
                    },
                    {
                        coin: 'DGD',
                        exchange: 'Binance',
                        baseCurrency: 'BTC',
                        date: 1525057561548,
                        high: 0.28,
                        low: -0.02
                    }
                ]
            }, {
                id: 3,
                name: 'Basic Gnome',
                imgURL: 'https://cdn.cryptohopper.com/images/signals/cryptognome.png',
                price: 5,
                description: "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
                signal_count: 10293,
                profit_pct: 253,
                subscriber_count: 2738,
                telegram: '#',
                youtube: '#',
                discord: '#',
                entries: [{
                        coin: 'ADA',
                        exchange: 'Binance',
                        baseCurrency: 'ETH',
                        date: 1525057161548,
                        high: 2.54,
                        low: -4.27
                    },
                    {
                        coin: 'NEO',
                        exchange: 'Bittrex',
                        baseCurrency: 'BTC',
                        date: 1528057261548,
                        high: 12.32,
                        low: -2.55
                    },
                    {
                        coin: 'XLM',
                        exchange: 'Bittrex',
                        baseCurrency: 'BTC',
                        date: 1525457551548,
                        high: 5.35,
                        low: -7.79
                    },
                    {
                        coin: 'XRP',
                        exchange: 'Binance',
                        baseCurrency: 'ETH',
                        date: 1525357561548,
                        high: 7.91,
                        low: -1.34
                    },
                    {
                        coin: 'DGD',
                        exchange: 'Binance',
                        baseCurrency: 'BTC',
                        date: 1525057561548,
                        high: 0.28,
                        low: -0.02
                    }
                ]
            }, {
                id: 4,
                name: 'CryptoFace God Alerts',
                imgURL: 'https://cdn4.iconfinder.com/data/icons/hotel-services-2/80/Hotel_service_icons-01-512.png',
                price: 400,
                description: "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.",
                signal_count: 6902,
                profit_pct: -9999,
                subscriber_count: 253,
                telegram: '#',
                facebook: '#',
                subscribed: true,
                entries: [{
                        coin: 'ADA',
                        exchange: 'Binance',
                        baseCurrency: 'ETH',
                        date: 1525057161548,
                        high: 0.05,
                        low: -42.27
                    },
                    {
                        coin: 'NEO',
                        exchange: 'Bittrex',
                        baseCurrency: 'BTC',
                        date: 1528057261548,
                        high: 1.22,
                        low: -26.55
                    },
                    {
                        coin: 'XLM',
                        exchange: 'Bittrex',
                        baseCurrency: 'BTC',
                        date: 1525457551548,
                        high: 3.12,
                        low: -72.79
                    },
                    {
                        coin: 'XRP',
                        exchange: 'Binance',
                        baseCurrency: 'ETH',
                        date: 1525357561548,
                        high: 3.99,
                        low: -14.34
                    },
                    {
                        coin: 'DGD',
                        exchange: 'Binance',
                        baseCurrency: 'BTC',
                        date: 1525057561548,
                        high: 3.87,
                        low: -39.65
                    }
                ]
            }
        ];

        var url = window.location.href;
        var signalId = getAllUrlParams(url).id;
        vm.signal = _.find(vm.signals, function(signal) { return signal.id == "3" });
        // vm.signal = _.find(vm.signals, function(signal){return signal.id == signalId });
        vm.changeChart = changeChart;

        $scope.charts = [
            { name: 'Profit %', id: 'profitPct' },
            { name: 'Signal Count', id: 'signalCnt' }
        ];

        $scope.selectedChart = { name: 'Profit %', id: 'profitPct' };

        initChart();
        initTable();
    }

    function changeChart() {
        $scope.series = [$scope.selectedChart.name];
        if ($scope.selectedChart.id === 'profitPct') {
            $scope.data = [
                [30, 45, 67, 12, -10, 20, 23]
            ];
        } else {
            $scope.data = [
                [300, 432, 382, 423, 444, 592, 324]
            ];
        }
    }

    function initChart() {
        $scope.labels = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];
        $scope.series = ['Profit %'];
        $scope.data = [
            [30, 45, 67, 12, -10, 20, 23]
        ];

        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
        $scope.options = {
            scales: {
                yAxes: [{
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                }]
            }
        };
    }

    function initTable() {
        vm.tableParams = new NgTableParams({
            // initial sort order
            sorting: { name: "asc" }
        }, {
            dataset: vm.signal.entries,
            counts: []
        });
    }
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

function getAllUrlParams(url) {
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    var obj = {};
    if (queryString) {
        queryString = queryString.split('#')[0];
        var arr = queryString.split('&');
        for (var i = 0; i < arr.length; i++) {
            var a = arr[i].split('=');
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function(v) {
                paramNum = v.slice(1, -1);
                return '';
            });
            var paramValue = typeof(a[1]) === 'undefined' ? true : a[1];
            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();
            if (obj[paramName]) {
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                if (typeof paramNum === 'undefined') {
                    obj[paramName].push(paramValue);
                } else {
                    obj[paramName][paramNum] = paramValue;
                }
            } else {
                obj[paramName] = paramValue;
            }
        }
    }
    return obj;
}