<div style="text-align: center;">
    <h1> Ti Framework </h1>
    <h2> A powerful and easy to use UI testing framework </h2>
</div>

## Getting Started
---
To get started, one has to first install the dependencies.
Assuming you are in the main folder (`t-framework`), please, run:
```shell
npm i
```
Then, we need to install the [Ti Cli](#-the-ti-cli).
Assuming you are in the main folder (`t-framework`), please, run:
```shell
npm i -g
```

## Examples
---

### Code
[Full documentation](Docs/html/index.html)

Please, take a look at the `4` available `test-suites` for direct reference on how to use the Selector API.

### CLI
To see help on Ti CLI, please run:
```shell
ti --help
```
Detailed CLI usage has been shown in the [Validation Video](../VALIDATION.md).

## Code coverage and Javascript frameworks
---
This framework is supposed to work with all majors javascript frameworks including `Angular`, `ReactJS`, `VueJS`, etc.

Actually, the `scopes` in `tests` folder represents where the coverage will be calculated as they provide the data for the tests. It means that, for instance, for an Angular application when we import a component's or a service's elements or variables, the scope will automatically be generated for those providers. It is actually powered by the vanilla `Jest` and supports `istanbul` plugins and directives.

Coverage reports can be found at `results/coverage/` folder and it consists of an `html`, `xml` and `json` reports.

## Running the tests
---
To run all the tests, please run:
```shell
npm run test
```
To run a unique test, please run:
```shell
npm run test -- -t <test-name>
```
where `<test-name>` is the name of the test to be run or an `regex` of this name.
Typically, we have a great marge of freedom here. For instance:
`npm run test -- -t mytest` is equivalent to `npm run test -- -t mytest.test` or `npm run test -- -t mytest.test.js` given a test named `mytest.test.js`.

`Regex` can also be used to run a group of tests and the `-t` flag supports multiple parameters so multiple tests can be run concurrently.

## Framework Overview
---
The framework for this challenge I will name `Ti Framework` (T Framework for testing framework)in the following for convenience, is a framework thought to power a UI testing framework that is at the same time complete, powerful and easy to use.

The key ideas behind it are to ease the process of tests creation for UI unit and e2e testing, and to keep a clean workflow and workplace. Indeed, focusing on that, it thus seems obvious that one needs to handle variables in a smart way. 

Ti Framework is built uppon Puppeteer. Thus, it has all Puppeteer's features. And extends it with many more.

## The "Ti CLI"
---
The Ti CLI is the Command Line Interface of the Ti framework. It provides `2` commands:
- `ti new <test_suite_name> <base_url>` that creates a new test suite with the name `test_suite_name` and the base url `base_url`. When this command is run, it creates `2` files. One in `tests/scopes` containing the variables to be used for the test suite and the other in `tests/test-suites` containing the test suite itself.
- `ti add <test_suite_name> <test_case_name>` that creates a new test case with the name `test_case_name` in the test suite `test_suite_name`. When this command is run, it adds to the file `test_suite_name` the test case `test_case_name`.

## OP Features
---
By those points, Ti-Framework stands out.
- Clean and organized test suites, workflow and workplace
- Is supposed to work with all major javascript/node.js frameworks with still a good coverage report powered by [Jest](https://jestjs.io/)
- Nice helpers for multiple languages testing, element selection and more
- Powerful and higly customizable API
- Extends all the vanilla functionalities of `Puppeteer` and `Jest`
- Powerful Command Line Interface to easily manage test suites and test cases.
- Asynchronous tests in navigator
- Ease to add new templates of various depth level and features

## Additional notes
---
- Only the DomSelector API is intented for global usage.
- Default Constants are not intended for core usage.
- Logger is not intended for global usage. Use console logging instead.
- [.env](.env) is supposed to be used for core configuration. If you want for instance to `set the brower visible or not`. You can also set there some `SENSIBLE` values like `usernames` or `passwords` that can be accessed by the framework using dotenv process.