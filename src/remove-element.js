
/**
 * [removeElement description]
 * @return {[type]} [description]
 */
export var removeElement = function(element) {
	
	if (!('remove' in Element.prototype)) {
	    Element.prototype.remove = function() {
	        if (this.parentNode) {
	            this.parentNode.removeChild(this);
	        }
	    };
	};

	element.remove();
	
};