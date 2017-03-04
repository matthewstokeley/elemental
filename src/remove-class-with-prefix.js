/**
 * [removeClassWithPrefix description]
 * @param  {[type]} element [description]
 * @param  {[type]} prefix  [description]
 * @return {[type]}         [description]
 */
var removeClassWithPrefix = function(element, prefix) {

    if (element.classList && element.classList.remove) {
        element.classList.remove(prefix);
    } else if (element.className) {
        element.className = element.className.toString().replace(/[aA-zZ\-]*/, '');
    }
    
    return element;
    
};