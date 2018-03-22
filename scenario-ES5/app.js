"use strict";
var Test;
(function (Test) {
    var ES5;
    (function (ES5) {
        var TestController = /** @class */ (function () {
            function TestController($log) {
                this.$log = $log;
                this.message = 'Hello world';
                $log.log('-- TestController ::: Initialized');
            }
            TestController.$inject = [
                '$log'
            ];
            return TestController;
        }());
        ES5.TestController = TestController;
        var TestClassDirective = /** @class */ (function () {
            function TestClassDirective() {
                this.template = '<div>{{vm.message}}</div>';
                this.scope = {}; // isolate scope
                this.restrict = 'AE';
                this.controllerAs = 'vm';
                this.replace = true;
                this.controller = 'TestController';
                this.link = function (scope, element, attrs, ctrl) {
                };
                console.log('-- TestClassDirective ::: Initialized');
            }
            TestClassDirective.factory = function () {
                // Instantiate instance of Directive Class
                var directive = function () { return new TestClassDirective(); };
                // Dependency Injection array
                directive.$inject = [];
                console.log('-- TestClassDirective ::: Factory');
                // return completed Directive Class
                return directive;
            };
            return TestClassDirective;
        }());
        ES5.TestClassDirective = TestClassDirective;
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
        ES5.TestFunctionDirective = TestFunctionDirective;
        var module = angular.module('app', []);
        module.controller('TestController', TestController);
        module.directive('testClass', TestClassDirective.factory());
        //module.directive('TestFunction', TestFunctionDirective);
    })(ES5 = Test.ES5 || (Test.ES5 = {}));
})(Test || (Test = {}));
