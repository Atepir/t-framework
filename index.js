#! /usr/bin/env node

import { program } from 'commander';
import { TemplateService } from './common/services/test-suite-template.service.js';
import { CaseService } from './common/services/test-case.service.js';
import ora from 'ora';

const spinner = ora('[Ti CLI] ').start();
spinner.color = 'blue';

program.version("0.0.1");

program
    .command('new <test_suite_name> <base_url>')
    .description('Creates a new test suite template ready for testing integration')
    .action((n, u) => new TemplateService(n, u).initTestSuite());

program
    .command('add <test_suite_name> <test_case_name>')
    .description('Adds a new test case to the test suite')
    .action((n, c) => new CaseService(n).addCase(c));

program.
    parse();

spinner.stop();