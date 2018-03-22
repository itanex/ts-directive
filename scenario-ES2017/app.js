"use strict";
var Test;
(function (Test) {
    var ES2017;
    (function (ES2017) {
        class TestController {
            constructor($log) {
                this.$log = $log;
                this.message = 'Hello world';
                $log.log('-- TestController ::: Initialized');
            }
        }
        TestController.$inject = [
            '$log'
        ];
        ES2017.TestController = TestController;
        class TestClassDirective {
            constructor() {
                this.template = '<div>{{vm.message}}</div>';
                this.scope = {}; // isolate scope
                this.restrict = 'AE';
                this.controllerAs = 'vm';
                this.replace = true;
                this.controller = 'TestController';
                this.link = (scope, element, attrs, ctrl) => {
                };
                console.log('-- TestClassDirective ::: Initialized');
            }
            static factory() {
                // Instantiate instance of Directive Class
                const directive = () => new TestClassDirective();
                // Dependency Injection array
                directive.$inject = [];
                console.log('-- TestClassDirective ::: Factory');
                // return completed Directive Class
                return directive;
            }
        }
        ES2017.TestClassDirective = TestClassDirective;
        function TestFunctionDirective() {
            return {
                template: '<div>{{vm.message}}</div>',
                restrict: 'AE',
                replace: true,
                controller: 'TestController',
                controllerAs: 'vm',
                // isolate scope 
                // properties defined by bindToController
                scope: {},
                bindToController: {
                    searchTerm: "="
                }
            };
        }
        ES2017.TestFunctionDirective = TestFunctionDirective;
        var module = angular.module('app', []);
        module.controller('TestController', TestController);
        module.directive('testClass', TestClassDirective.factory());
        //module.directive('TestFunction', TestFunctionDirective);
    })(ES2017 = Test.ES2017 || (Test.ES2017 = {}));
})(Test || (Test = {}));
