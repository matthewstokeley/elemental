/**
 * [addClass description]
 * @param {[type]} element   [description]
 * @param {[type]} className [description]
 */

export var addClass = function(element, className) {

    if (element.classList && element.classList.add) {
        element.classList.add(className);
    } else if (element.className) {
        element.className = element.className + ' ' + className;
    }

    return element;

};
