angular
    .module('bc-featured-results', [])
    .controller('prmFeaturedResultsAfterController', [function () {
        var vm = this;
        vm.term = vm.parentCtrl.term;
    }])
    .component('prmFeaturedResultsAfter', {
        bindings: { parentCtrl: '<'},
        controller: 'prmFeaturedResultsAfterController',
        templateUrl: `primo-explore-featured-results/html/featured-results.html`
    });
