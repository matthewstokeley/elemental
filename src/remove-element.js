(function(jsElements) {
	/**
	 * [removeElement description]
	 * @return {[type]} [description]
	 */
	var removeElement = function(element) {
		
		if (!('remove' in Element.prototype)) {
		    Element.prototype.remove = function() {
		        if (this.parentNode) {
		            this.parentNode.removeChild(this);
		        }
		    };
		};

		element.remove();
		
	};

	jsElements.removeElement = removeElement;

})(jsElements);