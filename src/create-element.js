(function(jsElements) {
	/**
	 * @param  {Object} options
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

	jsElements.addClass = addClass;

})(jsElements);
