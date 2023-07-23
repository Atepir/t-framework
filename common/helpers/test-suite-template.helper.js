import fs from 'fs';

const scopeTemplate = fs.readFileSync('common/templates/scope.template.txt', 'utf8');
const testSuiteTemplate = fs.readFileSync('common/templates/test-suite.template.txt', 'utf8');

export {
    scopeTemplate,
    testSuiteTemplate
}