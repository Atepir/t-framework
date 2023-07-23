const _ = require('lodash');

class DomSelector {
    constructor(dataCentre=null) {
        this.dataCentre = dataCentre;
    }

    /**
     * Deep selector from dataCentre
     * @brief Selects deeply an element from the test suite scope data
     * @fn _select
     * @param {string} deepSelector 
     * @param {Object} dataCentre 
     * @returns the peppeteer selector for the given deep selector
     */
    deepSelect(deepSelector) {
        const selectorsArray = deepSelector.split('.');
        const [firstSelector, ...subSelectors] = selectorsArray;
        let newSelector = this.dataCentre[firstSelector];
        let _element;
        for (let selector of subSelectors) {
            if (newSelector) {
                newSelector = newSelector[selector];
                _element = newSelector;
            }
        }
        return firstSelector + '[' + subSelectors[0] + '="' + _.toString(_element) + '"]';
    }

    /**
     * @fn _selectByAttribute
     * @param {string} attributeName
     * @param {string} attributeValue
     * @returns the peppeteer selector for the given attribute name and value
     */
    _selectByAttribute(attributeName, attributeValue) {
        return "[" + attributeName + "=\"" + attributeValue + "\"]";
    }

    /**
     * @fn _selectById
     * @param {string} id
     */
    _selectById(id) {
        return this._selectByAttribute('id', id);
    }

    /**
     * @fn _selectByClass
     * @param {string} className
     */
    _selectByClass(className) {
        return this._selectByAttribute('class', className);
    }

    /**
     * @fn selectElementByAttribute
     * @param {string} elementSelector
     * @param {string} attributeName
     * @param {string} attributeValue
     */
    selectElementByAttribute(elementSelector, attributeName, attributeValue) {
        return elementSelector + this._selectByAttribute(attributeName, attributeValue);
    }

    /**
     * @fn selectElementByAttributes
     * @param {string} elementSelector
     * @param {Object} attributes
     */
    selectElementByAttributes(elementSelector, attributes) {
        let result = new Array(elementSelector);
        for (attribute in attributes) {
            result.push(this._selectByAttribute(attribute, attributes[attribute]));
        }
        return result.join('');
    }

    /**
     * @fn selectElementById
     * @param {string} elementSelector
     * @param {string} id
     */
    selectElementById(elementSelector, id) {
        return elementSelector + this._selectById(id);
    }

    /**
     * @fn selectElementByClass
     * @param {string} elementSelector
     * @param {string} className
     */
    selectElementByClass(elementSelector, className) {
        return elementSelector + this._selectByClass(className);
    }

    /**
     * @fn selectElementByClasses
     * @param {string} elementSelector
     * @param {Array} classes
     */
    selectElementByClasses(elementSelector, classes) {
        let result = new Array(elementSelector);
        for (className of classes) {
            result.push(this._selectByClass(className));
        }
        return result.join('');
    }

    /**
     * @fn selectElementByName
     * @param {string} elementSelector
     * @param {string} name
     */
    selectElementByName(elementSelector, name) {
        return elementSelector + this._selectByAttribute('name', name);
    }
}


module.exports = {
    DomSelector,
};
