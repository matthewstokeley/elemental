/**
 * Add class to an array of elements
 * @param {Array} array   [description]
 * @param {String} className [description]
 */
var addClassToElements = function(array, className) {
	
	for (var i = 0; i < array.length; i++) {

		if (array[i].classList && array[i].classList.add) {
	        array[i].classList.add(className);
	    } else if (array[i].className) {
	        array[i].className = array[i].className + ' ' + className;
	    }
	    
	}

    return array;

};