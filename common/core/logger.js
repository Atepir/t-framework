import chalk from 'chalk';

const logger = console;
const PREFIX = "[Ti CLI] ";

function success(message, prefix=true) {
    logger.log(chalk.blueBright(prefix ? PREFIX : "") + chalk.green(message));
}

function fail(message, prefix=true) {
    logger.error(chalk.blueBright(prefix ? PREFIX : "") + chalk.red(message));
}

function info(message, prefix=true) {
    logger.log(chalk.blueBright(prefix ? PREFIX : "") + chalk.yellow(message));
}

export {
    success,
    fail,
    info
}