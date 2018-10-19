angular
    .module('APP', ['ngTable'])
    .controller('core', core)
    .directive('backgroundSrc', backgroundSrc)

core.$inject = ['NgTableParams', '$scope'];

function core(NgTableParams, $scope) {
    var vm = this;

    init();

    function init() {
        initSignalsContext();
        // initTables();
    }

    function initSignalsContext() {
        vm.selectedNav = 'signals';
        vm.activeTab = 'open';
        vm.signals = [
            {
                name: 'Completely Random Signals'
            }
        ];
        initSignalsTable();
    }

    function initSignalsTable() {
        vm.signalsTableParams = new NgTableParams({
            // initial sort order
            sorting: { date: "desc" }
        }, {
            dataset: vm.signals,
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