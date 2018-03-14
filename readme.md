# ts-directive

Investigation into specific Typescript pattern for writing AngularJS directives.

Pattern

> Controller Class - Used as directive controller

> Directive Class - Used to define actual directive object. contains a factory to generate directive for angular to consume.

This pattern was tested in 1.8.36, 2.6.2 and 2.7.2. Each version was tested generating with the following TSC targets.


## Success
This target generates code that angular will properly build the controller as expected

        {
            "target": "es5"
        }

## Failure
This target generates code that angular will **NOT** properly build the controller as expected. This will cause a runtime error.

> Class constructor TestController cannot be invoked without 'new'

        {
            "target": "es6"
        }