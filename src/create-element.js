/**
 * [createElement description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
var createElement = function(options) {

	var element = document.createElement(options.element);        	
	for(var prop in options.properties) {
		if (options.hasOwnProperty(prop)) {
			elements[prop] = options.properties[prop];
		}
	}

	return element;
};
