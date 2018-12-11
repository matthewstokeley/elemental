
/**
 * [removeClass description]
 * @param  {[type]} element   [description]
 * @param  {[type]} className [description]
 * @return {[type]}           [description]
 */
export var removeClass = function(element, className) {

    if (element.classList && element.classList.remove) {
        element.classList.remove(className);
    } else if (element.className) {
        element.className = element.className.toString().replace(className, '');
    }

    return element;

};