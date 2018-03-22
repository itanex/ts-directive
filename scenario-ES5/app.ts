module Test.ES5 {

    export class TestController {
        public message: string = 'Hello world'
        static $inject =[
            '$log'
        ]

        constructor(
            private $log: ng.ILogService
        ) {
            $log.log('-- TestController ::: Initialized');
        }
    }

    export class TestClassDirective implements ng.IDirective {
        public template = '<div>{{vm.message}}</div>'
        public scope = {}; // isolate scope
        public restrict: string = 'AE';
        public controllerAs: string = 'vm';
        public replace: boolean = true;
        

        constructor(
        ) {
            console.log('-- TestClassDirective ::: Initialized');
        }

        public controller = 'TestController';

        public link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => {

        }

        public static factory(): ng.IDirectiveFactory {
            // Instantiate instance of Directive Class
            const directive = () => new TestClassDirective();

            // Dependency Injection array
            directive.$inject = [
            ];

            console.log('-- TestClassDirective ::: Factory');

            // return completed Directive Class
            return directive;
        }
    }


    export function TestFunctionDirective(): ng.IDirective {
       return <ng.IDirective>{
           template: '<div>{{vm.message}}</div>',
           restrict: 'AE',
           replace: true,

           controller: 'TestController',
           controllerAs: 'vm',

           // isolate scope 
           // properties defined by bindToController
           scope: {}, 
           bindToController : {
               searchTerm: "=" 
           }
       };
    }


    var module = angular.module('app', []);
    
    module.controller('TestController', TestController);

    module.directive('testClass', TestClassDirective.factory());

    //module.directive('TestFunction', TestFunctionDirective);

}