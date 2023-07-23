import fs from 'fs';
import { success, info } from '../core/logger.js';
import ora from 'ora';

class CaseService {
    constructor(suiteName) {
        this.suiteName = suiteName;
        this.suite = fs.readFileSync(`tests/test-suites/${this.suiteName}/index.test.js`, 'utf8');
    }

    /**
     * Adds a test case to the suite
     * @param {string} caseName 
     */
    addCase(caseName) {
        const spinner = ora('Initializing test case...').start();
        const caseContent = `
  it('${caseName}', async () => {
    expect(true).toBe(true);
  }, CONSTANTS.TIMEOUT);
  
  `;
        const caseIndex = this.suite.indexOf('// TI-FRAMEWORK: EOF');
        const newSuite = this.suite.slice(0, caseIndex) + caseContent + this.suite.slice(caseIndex);
        fs.writeFileSync(`tests/test-suites/${this.suiteName}/index.test.js`, newSuite);
        setTimeout(() => {
            spinner.color = 'green';
            spinner.text = 'Test case initialized!';
            spinner.stop();
            success(`Test case initialized!`);
            info(`[new case] ${caseName}`);
        }, 1000);
    }
}

export {
    CaseService
}