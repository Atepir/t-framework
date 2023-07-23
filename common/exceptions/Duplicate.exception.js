/**
 * Duplicate exception.
 */
class DuplicateError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DuplicateError';
    }
}

export default DuplicateError;