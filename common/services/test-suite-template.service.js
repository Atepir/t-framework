
import { scopeTemplate } from '../helpers/test-suite-template.helper.js';
import { testSuiteTemplate } from '../helpers/test-suite-template.helper.js';
import _ from 'lodash';
import fs from 'fs';
import { success, info, fail } from '../core/logger.js';
import ora from 'ora';
import DuplicateError from '../exceptions/Duplicate.exception.js';


class TemplateService {
    constructor(name, url) {
        this.name = name;
        this.url = url;
        this.scope = scopeTemplate;
        this.testSuite = testSuiteTemplate;
    }

    /**
     * @fn generateTestSuiteTemplate
     * @desc Generates a test suite template
     */
    generateTestSuiteTemplate() {
        const spinner = ora('Initializing test suite template...').start();
        const testSuiteTemplateFolder = `tests/test-suites/${this.name}`;
        const testSuiteTemplateFile = `${testSuiteTemplateFolder}/index.test.js`;

        try {
            fs.mkdirSync(testSuiteTemplateFolder);
            
            // replace all occurrences of {{NAME}} with the name of the test suite
            const testSuiteTemplateTmp = this.testSuite
                .replace(/UNAME/gm, _.toUpper(this.name))
                .replace(/NAME/gm, this.name);


            fs.writeFileSync(testSuiteTemplateFile, testSuiteTemplateTmp);
            setTimeout(() => {
                spinner.color = 'green';
                spinner.text = ' Done !';
                spinner.stop();
            }, 500);
            success(' Done !', false);
        } catch (e) {
            spinner.stop();
            if (e.code === 'EEXIST') {
                throw new DuplicateError(`Test suite already exists at ${testSuiteTemplateFile}`);
            }
            throw e;
        }
    }

    /**
     * @fn generateTestSuiteScopeTemplate
     * @desc Generates a test suite scope template
     */
    generateTestSuiteScopeTemplate() {

        const spinner = ora('Initializing test suite scope template...').start();
        const testSuiteScopeTemplateFolder = `tests/scopes/${this.name}`;
        const testSuiteScopeTemplateFile = `${testSuiteScopeTemplateFolder}/index.js`;

        try {
            fs.mkdirSync(testSuiteScopeTemplateFolder);

            const testSuiteScopeTemplateTmp = this.scope
                .replace(/UNAME/gm, _.toUpper(this.name))
                .replace(/NAME/gm, this.name)
                .replace(/URL/gm, `"${this.url}"`);


            fs.writeFileSync(testSuiteScopeTemplateFile, testSuiteScopeTemplateTmp);


            setTimeout(() => {
                spinner.color = 'green';
                spinner.text = ' Done !';
                spinner.stop();
            }, 500);
            success(' Done !', false);
        }
        catch (e) {
            spinner.stop();
            if (e.code === 'EEXIST') {
                throw new DuplicateError(`Test suite scope already exists at ${testSuiteScopeTemplateFile}`);
            }
            throw e;
        }
    }

    /**
     * @fn initTestSuite
     * @desc Initializes a test suite
     */
    initTestSuite() {
        const spinner = ora('Initializing test suite...').start();
        try {
            this.generateTestSuiteTemplate();
        } catch (e) {
            if (e instanceof DuplicateError) {
                info(e.message);
            } else {
                fail(e.message);
            }
            spinner.stop();
            return;
        }

        setTimeout(() => {
            try {
                this.generateTestSuiteScopeTemplate();
            }
            catch (e) {
                if (e instanceof DuplicateError) {
                    info(e.message, false);
                } else {
                    fail(e.message);
                }
                spinner.stop();
                return;
            }

            spinner.color = 'green';
            spinner.text = 'Test suite successfully initialized !';
            spinner.stop();
            success(`Test suite successfully initialized !`);
            info(`[scope-path] tests/scopes/${this.name}`);
            info(`[test-suite-path] tests/test-suites/${this.name}`);
        }, 1000);
    }
}


export {
    TemplateService
};