# ts-directive

Investigation into specific Typescript pattern for writing AngularJS directives.

Pattern

> Controller Class - Used as directive controller

> Directive Class - Used to define actual directive object. contains a factory to generate directive for angular to consume.

This pattern was tested in 1.8.36, 2.6.2 and 2.7.2. Each version was tested generating with the following TSC targets.

# Test Scenarios

## ES5

> Test Result -> **Success**

This target generates code that angular will properly build the controller as expected

        {
            "target": "es5"
        }

## ES6

> Test Result -> **Failure**

This target generates code that angular will **NOT** properly build the controller as expected. This will cause a runtime error.

> Class constructor TestController cannot be invoked without 'new'

        {
            "target": "es6"
        }

## ES2015

> Test Result -> **Failure**

This target generates code that angular will **NOT** properly build the controller as expected. This will cause a runtime error.

> Class constructor TestController cannot be invoked without 'new'

        {
            "target": "es2015"
        }

## ES2016

> Test Result -> **Failure**

This target generates code that angular will **NOT** properly build the controller as expected. This will cause a runtime error.

> Class constructor TestController cannot be invoked without 'new'

        {
            "target": "es2016"
        }

## ES2017

> Test Result -> **Failure**

This target generates code that angular will **NOT** properly build the controller as expected. This will cause a runtime error.

> Class constructor TestController cannot be invoked without 'new'

        {
            "target": "es2017"
        }

## ES2018

> Test Result -> **Failure**

This target generates code that angular will **NOT** properly build the controller as expected. This will cause a runtime error.

> Class constructor TestController cannot be invoked without 'new'

        {
            "target": "es2018"
        }